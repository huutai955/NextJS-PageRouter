'use client'
import React from 'react'
import {
    useQueries
} from '@tanstack/react-query'
import { getProduct } from '@/tanstack/products'
type Props = {}

export default function UseQueries({ }: Props) {
    const products = [1, 2, 3, 4, 5]
    const userQueries = useQueries({
        queries: products.map((product) => {
            return {
                queryKey: [`product`, product],
                queryFn: () => getProduct(product),
            }
        }),
    })
    if(userQueries[userQueries.length - 1].isLoading) {
        return <h2>is loading</h2>
    }
    return (
        <div>
            <h2>useQueries</h2>
        </div>
    )
}