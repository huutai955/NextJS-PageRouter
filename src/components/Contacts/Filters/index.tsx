import React, { useEffect } from 'react'
import MultipleFilters from './MultipleFilters'
import { handleQueryParams } from '@/utils/params'

type Props = {
    data: any
}

export default function Filters({ data }: Props) {
    return (
        <div className='flex gap-4'>
            {data.map((item: any, index: number) => {
                return <MultipleFilters key={index} data={item} />
            })}

        </div>
    )
}