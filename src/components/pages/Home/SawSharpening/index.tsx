import React, { type FC } from 'react'

import s from './index.module.scss'
import image4 from '../../../../images/image_4.png'
import image5 from '../../../../images/image_5.png'

export const SawSharpening: FC = () => (
    <div className={s.wrapper}>
        <div className={`container ${s.content}`}>
            <div className={s.title}>Saw Sharpening Service in the Greater Phoenix, AZ Area</div>
            <div className={s.titleBorder}/>

            <div className={s.innerContent}>
                <div className={s.text}>
                    <p>
                        <span className={s.bold}>Valley Saw Service</span>
                        has provided
                        <span className={s.bold}>quality saw sharpening services</span>
                        to the Greater Phoenix area since 1967. Over the last 40 years, we have proven our commitment to
                        our customers by only using the latest technology in our work. In addition to sharpening saws,
                        we also
                        <span className={s.bold}>
                            repair and create custom tooling for the wood working, metal working,
                        </span>
                        and <span className={s.bold}>construction industries</span>. Whether you&apos;re a hobbyist, a
                        contractor, or a large corporation, we can provide you with the blade you need, no matter your
                        purpose or machine.
                    </p>
                    <div className={s.list}>
                        <div>BAND SAW BLADES</div>
                        <div>METAL CUTTING BLADES</div>
                        <div>CARBIDE BLADE SHARPENING</div>
                        <div>COLDSAWS</div>
                        <div>STEEL CIRCULAR SAWS</div>
                        <div>ROUTER BITS</div>
                        <div>PLANETOR, MULTISPUR AND FORSTNER BITS</div>
                        <div>BORING BITS AND BRAD POINT DRILL BITS</div>
                        <div>SHAPER KNIVES AND CUTTERS</div>
                        <div>CARBIDE INSERTS</div>
                        <div>HANDSAWS</div>
                        <div>MISCELLANEOUS TOOLS</div>
                    </div>
                </div>
                <div className={s.images}>
                    <img src={image4} alt="" className={s.image}/>
                    <img src={image5} alt="" className={s.image}/>
                </div>
            </div>
        </div>
    </div>
)
