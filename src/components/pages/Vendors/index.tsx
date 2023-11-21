import React, { type FC } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { GradientBackground, Map, Title } from '../../common'
import { Vendor } from './Vendor'

import { contactPhone } from '../../../config'

import s from './index.module.scss'

import image1 from '../../../images/613-1920w.webp'
import image2 from '../../../images/Bahco-1920w.png'
import image3 from '../../../images/img_header-2B-282-29-d404a971-1920w.webp'
import image4 from '../../../images/605.gif'
import image5 from '../../../images/611-1920w.webp'
import image6 from '../../../images/903-1920w (1).webp'
import image7 from '../../../images/921-11d95ba0-1920w.webp'
import image8 from '../../../images/625-1920w.png'
import image9 from '../../../images/627-1920w.webp'
import image10 from '../../../images/629-1920w.webp'
import image11 from '../../../images/631-1920w.webp'
import image12 from '../../../images/633-1920w.webp'
import image13 from '../../../images/635-1920w.webp'
import image15 from '../../../images/911-1920w.webp'

const vendors = [
  {
    name: 'FS Tool',
    content: 'We carry a vast array of FS Tool blades in all sizes and tooth counts. We also have a smaller selection of various items by FS Tool such as:',
    list: ['Router Bits', 'Inserts', 'Boring Bits', 'Steel']
  },
  {
    name: 'Amana Tool',
    content: 'We carry a wide variety of Amana Tool products. The more popular products include saws, router bits, and wood bits.',
    list: ['Saw Blades', 'Router Bits', 'Wood Bits']
  },
  {
    name: 'Whiteside',
    content: 'The majority of our router bits come from Whiteside. We keep most of the router bits from the catalog in stock.',
    list: ['Router Bits']
  },
  {
    name: 'Lenox',
    content: 'Along with our band saw services, we carry band saws, hole saws, coolant fluid, saw blades, jigsaws, and more.',
    list: ['Band Saws', 'Hole Saws', 'Coolant', 'Saw Blades', 'Jig Saws', '& More']
  }
]

export const Vendors: FC = () => (
    <>
        <Title title='Vendors'/>

        <div className={s.wrapper}>
            <div className='container'>
                <div className={s.text}>
                    <span className={s.bold}>Valley Saw Services</span> only distributes products from vendors we know
                    and that we trust have proven skill at what they do. In this way, we provide our customers with
                    the <span className={s.bold}>best quality products</span> possible. Here are just some of the
                    vendors and products we carry here in our shop. Anything we do not carry, we will order for you.
                </div>

                <div className={s.carouselWrapper}>
                    <Carousel
                        interval={5000}
                        autoPlay
                        dynamicHeight={false}
                        infiniteLoop
                        showStatus={false}
                        animationHandler='slide'
                        showThumbs={false}
                        showIndicators={false}
                        width={400}
                    >
                        <div className={s.imgWrapper}><img className={s.img} src={image1} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image2} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image3} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image4} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image5} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image6} alt=""/></div>
                        <div className={s.imgWrapper}><img className={s.img} src={image7} alt=""/></div>
                    </Carousel>
                </div>

                <div className={s.vendors}>
                    {vendors.map(vendor => <Vendor key={vendor.name} {...vendor} />)}
                </div>
            </div>
        </div>

        <GradientBackground>
            <div className={s.wrapper}>
                <div className='container'>
                    <div className={s.ourVendors}>
                        <div className={s.ourVendorsTitle}>Our Vendors</div>
                        <div className={s.carouselWrapper}>
                            <Carousel
                                interval={5000}
                                autoPlay
                                dynamicHeight={false}
                                infiniteLoop
                                showStatus={false}
                                animationHandler='slide'
                                showThumbs={false}
                                showIndicators={false}
                                width={615}
                            >
                                <div className={s.imgWrapper}><img className={s.img} src={image4} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image5} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image6} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image7} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image8} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image9} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image10} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image11} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image12} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image13} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image15} alt=""/></div>
                                <div className={s.imgWrapper}><img className={s.img} src={image2} alt=""/></div>
                            </Carousel>
                        </div>
                    </div>
                    <div className={s.callUs}>
                        Contact Valley Saw Service in Phoenix, AZ for quality saws and sharpening services.
                        Call <span className={s.bold}>{contactPhone}</span> today!
                    </div>
                </div>
            </div>
        </GradientBackground>

        <Map />
    </>
)
