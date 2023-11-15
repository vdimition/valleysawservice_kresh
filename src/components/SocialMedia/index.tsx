import React, { type FC } from 'react'

import s from './index.module.scss'

import faceBock from '../../icons/faceBock.svg'
import googleMyBusiness from '../../icons/googleMyBusiness.svg'
import yelp from '../../icons/yelp.svg'
import { socialMedia } from '../../config'

export const SocialMedia: FC = () => (
    <div className={s.wrapper}>
        <a className={`${s.button} ${s.faceBock}`} href={socialMedia.faceBock}>
            <img src={faceBock} alt={'faceBock'}/>
        </a>
        <a className={`${s.button} ${s.googleMyBusiness}`} href={socialMedia.googleMyBusiness}>
            <img src={googleMyBusiness}
                 alt={'google My Business'}/>
        </a>
        <a className={`${s.button} ${s.yelp}`} href={socialMedia.yelp}>
            <img src={yelp} alt={'yelp'}/>
        </a>
    </div>
)
