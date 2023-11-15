import React, { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './index.module.scss'
import logo from '../../images/logo.jpg'
import { SocialMedia } from '../SocialMedia'
import { address, contactPhone } from '../../config'
import { publicRoutes } from '../../router'

export const Header: FC = () => (
    <div className={s.wrapper}>
        <div className='container'>
            <div className={s.innerWrapper}>
                <div className={s.logo}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className={s.content}>
                    <SocialMedia/>
                    <div>
                        <span className={s.callUs}>Call Us!</span>
                        <span className={s.contactPhone}>{contactPhone}</span>
                    </div>
                    <div><span className={s.address}>{address}</span></div>
                    <nav className={s.nav}>
                        {publicRoutes.map(({ path, title }) => (
                            <NavLink
                                key={path}
                                to={(path ?? '/')}
                                className={({ isActive }) => (
                                  isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
                                )}
                            >
                                {title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </div>
)
