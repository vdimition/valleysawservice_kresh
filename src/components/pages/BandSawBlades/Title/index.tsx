import React, { type FC } from 'react'
import s from './index.module.scss'

export const Title: FC = () => (
    <div className={s.wrapper}>
        <div className={'container'}>
            <h1 className={s.title}>Band Saw Blades in the Greater Phoenix, AZ Area</h1>
            <div className={s.titleUnderline}/>
        </div>
    </div>
)
