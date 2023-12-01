import React, { type FC } from 'react'
import s from './index.module.scss'

export interface Review {
  content: string
  author: string
}

export const ReviewCard: FC<Review> = ({ content, author }) => (
    <div className={s.content}>
        <div className={s.stars}>★★★★★</div>
        <div className={s.review}>{content}</div>
        {Boolean(author) && <div className={s.author}>{author}</div>}
    </div>
)
