import React, { type FC, type ReactNode } from 'react'
import s from './index.module.scss'

export const GradientBackground: FC<{ children: ReactNode }> = ({ children }) => (
    <div className={s.wrapper}>
        <div className={s.innerWrapper}>
            {children}
        </div>
    </div>
)
