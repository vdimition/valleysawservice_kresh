import React, { type FC } from 'react'

import s from './index.module.scss'

import { Title } from '../../common/Title'
import { TextBlock1 } from './TextBlock1'
import { TextBlock2 } from './TextBlock2'
import { TextBlock3 } from './TextBlock3'

export const BandSawBlades: FC = () => (
    <>
        <Title title='Band Saw Blades in the Greater Phoenix, AZ Area'/>
        <div className={`${s.wrapper} ${s.bgRed}`}>
            <div className={'container'}>
                <TextBlock1/>
                <TextBlock2/>
                <TextBlock3/>
            </div>
        </div>
    </>
)
