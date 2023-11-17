import React, { type FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import s from './index.module.scss'
import { reviews } from '../../../../config'
import { ReviewCard } from './Review'

export const Reviews: FC = () => (
    <div className={s.wrapper}>
        <div className={`container ${s.innerWrapper}`}>
            <div className={s.title}>REVIEWS</div>
            <Carousel interval={5000} autoPlay infiniteLoop className={s.content} showStatus={false}
                      animationHandler='fade' showThumbs={false} showIndicators={false}>
                {reviews.map((review) => (
                    <ReviewCard key={review.author} {...review} />
                ))}
            </Carousel>
        </div>
    </div>
)
