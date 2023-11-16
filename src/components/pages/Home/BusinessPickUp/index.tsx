import React, { type FC } from 'react'

import s from './index.module.scss'
import { contactPhone } from '../../../../config'

export const BusinessPickUp: FC = () => (
    <div className={s.wrapper}>
        <div className={`container ${s.content}`}>
            <div className={s.innerWrapper}>
                <div>
                    Business pick up and delivery in the Phoenix metro area.
                </div>
                <div>
                    Out of state shipping available.
                </div>
                <div className={s.contactPhone}>{contactPhone}</div>
            </div>
        </div>
    </div>
)
