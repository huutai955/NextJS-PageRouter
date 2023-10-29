import React from 'react'
import { Skeleton as SkeletonMUI } from '@mui/material';


type Props = {
    height: number,
    width: number | string
}

export default function Skeleton({ height, width }: Props) {
    return (
        <SkeletonMUI variant="rounded" width={width} height={height} />
    )
}