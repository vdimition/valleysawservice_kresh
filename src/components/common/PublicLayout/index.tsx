import React, { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import s from './index.module.scss'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const PublicLayout: FC = () => (
    <div className={s.wrapper}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
)
