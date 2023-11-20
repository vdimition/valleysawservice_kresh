import React, { type FC } from 'react'
import s from './index.module.scss'
import { Delimiter } from '../Delimiter'

export const Title: FC<{ title: string }> = ({ title }) => (
    <>
        <Delimiter/>
        <div className={s.wrapper}>
            <div className={'container'}>
                <h1 className={s.title}>{title}</h1>
                <div className={s.titleUnderline}/>
            </div>
        </div>
    </>

)
