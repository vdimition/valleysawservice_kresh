import React, { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const PublicLayout: FC = () => (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
)
