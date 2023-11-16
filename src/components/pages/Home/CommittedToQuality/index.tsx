import React, { type FC } from 'react'

import s from './index.module.scss'
import { contactPhone } from '../../../../config'

export const CommittedToQuality: FC = () => (
    <div className={s.wrapper}>
        <div className={s.innerWrapper}>
            <div className={`container ${s.content}`}>
                <div className={s.title}>Committed to Quality</div>
                <div className={s.text}>
                    We at Valley Saw Service are dedicated to staying current with the changing technology in the industry. As cutting tools and machinery have
                    advanced over the years, we have continued to update our inventory. In the past 3 years alone, we have acquired 3 state-of-the-art automatic saw
                    sharpeners. We stock and sell only top quality products, including saw blades, router bits, cold saws, band saws, and more. We have the
                    experience necessary to guide our customers toward the products they need, all while saving them both time and money. We stand proudly
                    behind our work and all the products we sell.
                </div>
                <div>
                    Contact Valley Saw Service in Phoenix, AZ for quality saws and sharpening services. Call
                    {' '}<span className={s.bold}>{contactPhone}</span>{' '}
                    today!
                </div>
            </div>
        </div>
    </div>
)
