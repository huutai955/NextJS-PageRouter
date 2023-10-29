import React from 'react'
import { Pagination as PaginationMUI } from '@mui/material';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { handlePage } from '@/redux/reducers/contacts';

type Props = {
}

export default function Pagination({ }: Props) {
    const { filters, page } = useAppSelector(state => state.contacts)
    const dispatch = useAppDispatch()
    const handleChange = (event: any, page: number) => {
        dispatch(handlePage(page))
    }
    return (
        <PaginationMUI count={10} page={page} color="secondary" onChange={handleChange} />
    )
}