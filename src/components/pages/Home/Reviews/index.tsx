import React, { type FC } from 'react'

import s from './index.module.scss'

export const Reviews: FC = () => (
    <div className={s.wrapper}>
        <div className={`container ${s.innerWrapper}`}>
            <div className={s.title}>REVIEWS</div>
            <div className={s.content}>
                <div className={s.stars}>★★★★★</div>
                <div className={s.review}>
                    These guys are good. We have used them for all our specific blade needs and
                    they have never failed. I highly suggest that you look into using them if you are in
                    aluminum/metal manufacturing. Good turnaround and quality.
                </div>
                <div className={s.author}>Shawn P.</div>
            </div>
        </div>
    </div>
)
