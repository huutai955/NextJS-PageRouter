'use client'
import { getProducts, getProductsWithLimit } from '@/tanstack/products'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {}

export default function test1({ }: Props) {
    const [productData, setProductData] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [page, setPage] = React.useState(1)
    const [size, setSize] = React.useState(20)
    const { isLoading, data, isSuccess, isError } = useQuery({
        queryKey: ['products', page], queryFn: () => {
            return getProducts(page, size)
        }
    })



    if (isLoading) {
        return <h2>is loading</h2>
    }

    if (isSuccess) {
        console.log(data)
        return (
            <div>
                {data.data.list.map((item: any) => {
                    return <h2>{item.identifiedDate}</h2>
                })}
                <div className='flex'>
                    {productData.length > 0 && productData.map((item: any) => {
                        return <h2 className='cursor-pointer' key={item} onClick={() => {
                            setPage(item)
                        }}>{item}</h2>
                    })}
                </div>
            </div>
        )
    }

}