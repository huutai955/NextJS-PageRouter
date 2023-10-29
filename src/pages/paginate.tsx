'use client'
import { getProduct } from '@/tanstack/products'
import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'

type Props = {}

export default function Paginate({ }: Props) {
    const [number, setNumber] = useState(1)
    const [product, setProduct] = useState()
    const { data } = useQuery({
        queryKey: ['product', number], queryFn: () => {
            return getProduct(number)
        }, placeholderData: product
    })

    useEffect(() => {
        setProduct(data)
    }, [data])

    return (
        <div>
            <h2>{data.title}</h2>
            <div className='flex gap-3'>
                <button onClick={() => {
                    setNumber(number => Math.max(number - 1, 1))
                }}>Prev</button>
                <button onClick={() => {
                    setNumber(number + 1)
                }}>Next</button>
            </div>
        </div>
    )
}