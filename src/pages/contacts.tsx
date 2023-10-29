'use client'

import Filters from '@/components/Contacts/Filters'
import Table from '@/components/Contacts/Table'
import Pagination from '@/components/Pagination/Pagination'
import Skeleton from '@/components/Skeleton'
import { useAppSelector } from '@/hooks/useAppSelector'
import { contactAPI } from '@/tanstack/contacts'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

type Props = {}

export default function Contacts({ }: Props) {
    const { filters, page } = useAppSelector(state => state.contacts)
    const filtersQuery = useQuery({
        queryKey: ['contacts/filters'], queryFn: () => {
            return contactAPI.getFilters()
        }
    })

    const contactQuery = useQuery({
        queryKey: ['contacts/list', page, filters], queryFn: () => {
            const query = {
                filters: filters,
                page: page
            }
            return contactAPI.getContacts(query)
        }
    })

    if (contactQuery.isSuccess) {
        console.log(contactQuery.data)
    }

    return (
        <div>
            {filtersQuery.isSuccess && <Filters data={filtersQuery.data.data} />}
            {contactQuery.isSuccess ? <Table data={contactQuery.data.data.list} /> : <Table data={[]} />}
            <Pagination />
        </div>
    )
}