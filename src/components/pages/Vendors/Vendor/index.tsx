import React, { type FC } from 'react'

import s from './index.module.scss'

interface Props {
  name: string
  content: string
  list: string[]
}

export const Vendor: FC<Props> = ({ name, content, list }) => (
    <div className={s.wrapper}>
        <div className={s.name}>{name}</div>
        <div className={s.content}>{content}</div>
        <ul className={s.list}>
            {list.map(listItem => <li key={listItem}>{listItem}</li>)}
        </ul>
    </div>
)
