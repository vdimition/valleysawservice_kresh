import React, { type FC } from 'react'
import { Carousel } from 'react-responsive-carousel'

import s from './index.module.scss'

import image1 from '../../../../images/507-1920w.webp'
import image2 from '../../../../images/509-1920w.webp'
import image3 from '../../../../images/515-1920w.webp'
import image4 from '../../../../images/517-1920w.webp'
import image5 from '../../../../images/519-1920w.webp'
import image6 from '../../../../images/521-1920w.webp'

export const TextBlock2: FC = () => (
    <div className={s.wrapper}>
        <div className={s.text}>
            <div className={s.title}>For Wood, Plastic, Fiberglass And Some Metal Applications:</div>
            <div className={s.bahco}>BAHCO® CARBON STEEL BAND SAW BLADES</div>
            <div className={s.textStar1}><span className={s.star}>★</span> Variety of widths: 1/4&quot; - 1&quot;</div>
            <div className={s.textStar2}><span className={s.star}>★</span> Great for a variety of general purpose
                applications
            </div>
            <div className={s.lenox}>LENOX WOODMASTER® C BAND SAW BLADES</div>
            <div className={s.textStar2}><span className={s.star}>★</span> Engineered for demanding saw mill and resaw
                applications
            </div>
            <div className={s.lenox}>LENOX PALLETMASTER® C BAND SAW BLADES</div>
            <div className={s.textStar2}><span className={s.star}>★</span> Low Cost, Carbon Pallet Dismantling Blade
            </div>
        </div>
        <Carousel
            interval={5000}
            autoPlay dynamicHeight={false}
            infiniteLoop
            className={s.carousel}
            showStatus={false}
            animationHandler='slide'
            showThumbs={false}
            showIndicators={false}
            width={475}
        >
            <div className={s.imgWrapper}>
                <img className={s.img} src={image1} alt=""/>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.img} src={image2} alt=""/>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.img} src={image3} alt=""/>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.img} src={image4} alt=""/>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.img} src={image5} alt=""/>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.img} src={image6} alt=""/>
            </div>
        </Carousel>
    </div>
)
