import React, { type FC } from 'react'

import s from './index.module.scss'

export const SubTitle: FC<{ subTitle: string }> = ({ subTitle }) => (
    <div className={s.subTitle}>{subTitle}</div>
)
