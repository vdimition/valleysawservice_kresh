import React, { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

export const PublicLayout: FC = () => (
    <div>
        <Header/>
        <Outlet/>
    </div>
)
