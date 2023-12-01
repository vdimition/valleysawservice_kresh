import React, { type FC } from 'react'
import { Carousel } from 'react-responsive-carousel'

import s from './index.module.scss'
import { contactPhone } from '../../../../config'

import image1 from '../../../../images/image_1.jpeg'
import image2 from '../../../../images/image_2.webp'
import image3 from '../../../../images/image_3.webp'

export const BusinessPickUp: FC = () => {
  return (
        <div className={s.wrapper}>
            <Carousel
                renderArrowPrev={() => null}
                renderArrowNext={() => null}
                interval={5000}
                autoPlay
                infiniteLoop
                className={s.carousel}
                showStatus={false}
                animationHandler='fade'
                showThumbs={false}
                showIndicators={false}
            >
                <img className={s.img} src={image1} alt=""/>
                <img className={s.img} src={image2} alt=""/>
                <img className={s.img} src={image3} alt=""/>
            </Carousel>

            <div className={s.contentWrapper}>
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
        </div>
  )
}
