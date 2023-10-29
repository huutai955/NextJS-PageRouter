import React from 'react'
import { Button, Popover, Typography } from '@mui/material'
import { handleFilters, handlePage } from '@/redux/reducers/contacts';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';


type Props = {
    data: any
}

export default function MultipleFilters({ data }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const dispatch = useAppDispatch()
    const { filters } = useAppSelector(state => state.contacts)

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleFilter = (item: any) => {
        const itemFinded = filters.find((filterItem: any) => {
            return filterItem.col === data.col
        })
        const valResult: any = []
        if (itemFinded) {
            itemFinded.val.forEach((item: any) => {
                valResult.push(item)
            })
        }
        const index = valResult.findIndex((valItem: any) => {
            return valItem === item.selectedValue
        })
        if (index !== -1) {
            valResult.splice(index, 1)
        } else {
            valResult.push(item.selectedValue)
        }
        const result = [...filters]
        const resultIndex = result.findIndex(resultItem => {
            return resultItem.col === data.col
        })
        let resultFilter = {
            col: data.col,
            op: data.ops[1],
            val: valResult
        }
        if (resultIndex !== -1) {
            result[resultIndex] = resultFilter
        } else {
            result.push({
                col: data.col,
                op: data.ops[1],
                val: valResult
            })
        }
        dispatch(handleFilters(result))
        dispatch(handlePage(1))
    }
    // console.log(decodeURIComponent('%7B%22filter%22%3A%5B%7B%22col%22%3A%22ownerId%22%2C%22op%22%3A%22in%22%2C%22val%22%3A%5B%222%22%5D%7D%2C%7B%22col%22%3A%22tags%22%2C%22op%22%3A%22in%22%2C%22val%22%3A%5B%223ddsadasd%5C%5C%5C%5Casdasd%22%2C%22aa%22%5D%7D%2C%7B%22col%22%3A%22province%22%2C%22op%22%3A%22in%22%2C%22val%22%3A%5B%22H%C3%A0%20N%E1%BB%99i%22%2C%22H%C3%A0%20Giang%22%5D%7D%5D%7D'))
    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                {data.label}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    height: 300
                }}
            >
                <ul className='flex flex-col gap-3 w-[12.5rem]'>
                    {data.vals.map((item: any, index: number) => {
                        let activeValue = false;
                        return <li key={index} className='cursor-pointer bg-slate-500' onClick={() => {
                            handleFilter(item)
                        }}>{item.title}</li>
                    })}
                </ul>
            </Popover>
        </div>
    )
}