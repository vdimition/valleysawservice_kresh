import React, { type FC } from 'react'
import s from './index.module.scss'
import { Carousel } from 'react-responsive-carousel'
import image1 from '../../../../images/613-1920w.webp'
import image2 from '../../../../images/Bahco-1920w.png'
import image3 from '../../../../images/img_header-2B-282-29-d404a971-1920w.webp'

export const TextBlock1: FC = () => (
    <div className={s.wrapper}>
        <div className={s.text}>
            <span className={s.bold}>Valley Saw Service</span> of <span
            className={s.bold}>Phoenix, Arizona</span> is a <span
            className={s.bold}>&quot;cut to size&quot;</span> shop. This means that we carry the stock here,
            you tell us your size, then we cut and weld it - usually the same day. We carry<span
            className={s.bold}>Bahco</span>, <span className={s.bold}>Amada</span>, and <span
            className={s.bold}>Lenox</span> band saws. We supply various types of band saw coils and tooth
            counts for different applications. Below are a few descriptions of some of the blades we keep in
            our store.
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
        </Carousel>
    </div>
)
