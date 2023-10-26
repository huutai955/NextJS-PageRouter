import api from '@/api'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { incrementByAmount } from '@/redux/reducers/counter'
import { getProducts } from '@/swr/products'
import React, { ReactElement, ReactNode } from 'react'
import useSWR from 'swr'

type Props = {
    children: ReactElement
}



export default function FirstLayout({ children }: Props) {
    const { data, error, isLoading } = useSWR('/products', getProducts);

    console.log(data)
    const { value } = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch();

    if (isLoading) {
        return <h1>Is loading...</h1>
    }

    if (error) {
        return <h1>Lỗi rùi</h1>
    }

    return (
        <div>
            <h2>FirstLayout</h2>
            <button onClick={() => {
                dispatch(incrementByAmount(2))
            }}>Increase</button>
            <h2>{value}</h2>
            {children}
        </div>
    )
}