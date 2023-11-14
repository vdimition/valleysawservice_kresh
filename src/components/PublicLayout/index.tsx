import React, { type FC } from 'react'
import { Outlet } from 'react-router-dom'

export const PublicLayout: FC = () => (
    <div>
        PublicLayout
        <Outlet/>
    </div>
)
