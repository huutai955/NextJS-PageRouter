import { Button } from '@mui/material'
import React from 'react'
import {
    useMutation,
} from '@tanstack/react-query'
import { deleteProductById } from '@/tanstack/products'

type Props = {}

const Products = (props: Props) => {
    const mutation = useMutation({
        mutationFn: () => {
            return deleteProductById(5);
        }
    })

    return (
        <div>
            {mutation.isPending && 'Deleting...'}
            {mutation.isSuccess && 'Deleted!!'}
            <Button onClick={() => {
                mutation.mutate()
            }}>Delete Product</Button>
        </div>
    )
}


export default Products