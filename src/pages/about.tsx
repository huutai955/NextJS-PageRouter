import FirstLayout from '@/components/Layout/FirstLayout'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { Button } from '@mui/material'

type Props = {}

const About: NextPageWithLayout = ({ }: Props) => {
    return (
        <div>
            <Button variant="contained">Hello world</Button>
        </div>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <FirstLayout>
            {page}
        </FirstLayout>
    )
}

export default About