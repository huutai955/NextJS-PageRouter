import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { incrementByAmount } from '@/redux/reducers/counter'
import React, { ReactElement, ReactNode } from 'react'

type Props = {
    children: ReactElement
}

export default function FirstLayout({ children }: Props) {
    const { value } = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch();
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