import FirstLayout from '@/components/Layout/FirstLayout'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

type Props = {}

const About: NextPageWithLayout = ({ }: Props) => {
    return (
        <div>about</div>
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