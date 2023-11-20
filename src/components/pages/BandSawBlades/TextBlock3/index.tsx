import React, { type FC } from 'react'

import s from './index.module.scss'

import image1 from '../../../../images/459-1920w.webp'
import image2 from '../../../../images/905-1920w.webp'

export const TextBlock3: FC = () => (
    <div className={s.wrapper}>
        <div className={s.text}>
            <div className={s.title}>For Aluminum and Steels:</div>
            <div className={s.bahco}>BAHCO® COBRA BI-METAL BAND SAW BLADES</div>
            <div className={s.textStar1}><span className={s.star}>★</span> Powdered metal M42 high speed steel for a
                combination of higher hardness and higher toughness
            </div>
            <div className={s.textStar2}><span className={s.star}>★</span> Less vibrations resulting in reduced heat and
                better wear resistance
            </div>
            <div className={s.lenox}>AMADA® SGLB BI-METAL BAND SAW BLADES</div>
            <div className={s.textStar2}><span className={s.star}>★</span> High-Production M42 designes to cover a broad
                range of cutting applications
            </div>
            <div className={s.textStar2}><span className={s.star}>★</span> The blade&apos;s tough M42 cobalt edge
                resists heat and abrasion
            </div>
        </div>
        <div className={s.images}>
            <img className={s.img} src={image1} alt=""/>
            <img className={s.img} src={image2} alt=""/>
        </div>
    </div>
)
