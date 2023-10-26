'use client'
import React, { ReactElement, useState } from 'react'
import { NextPageWithLayout } from './_app'
import SigninLayout from '@/components/Layout/Signin'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginInfor } from '@/utils/type';





type Props = {}

const Signin: NextPageWithLayout = (props: Props) => {
    const [infor, setInfor] = useState<LoginInfor>({
        username: '',
        password: ''
    })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setInfor({
            ...infor,
            [name]: value
        })
    }
    return (
        <div className='bg-slate-300 h-screen flex justify-center'>
            <div className='p-3 pt-14 w-1/3'>
                <form className='w-full flex justify-center flex-col gap-2'>
                    <label>Username:</label>
                    <TextField id="outlined-basic" label="Username" value={infor.username} name="username" size="small" type='text' variant="outlined" onChange={handleChange} />
                    <label>Password:</label>
                    <TextField id="outlined-basic" label="Password" value={infor.password} name="password" size="small" type='password' variant="outlined" onChange={handleChange} />
                    <Button variant="contained" onClick={() => {
                    }}>Login</Button>
                </form>
            </div>
        </div>
    )
}

Signin.getLayout = function getLayout(page: ReactElement) {
    return <SigninLayout>
        {page}
    </SigninLayout>
}

export default Signin