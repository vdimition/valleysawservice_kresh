import React, { type FC } from 'react'
import { Title } from '../../common/Title'
import { SubTitle } from '../../common/SubTitle'

import s from './index.module.scss'

import image1 from '../../../images/907-339w.webp'
import image2 from '../../../images/909-339w.webp'
import image3 from '../../../images/535-320w.webp'
import image4 from '../../../images/537-320w.webp'
import image5 from '../../../images/115-320w.webp'
import image6 from '../../../images/908-3cd6a220-475w.webp'

export const MetalCuttingBlades: FC = () => (
    <>
        <Title title='Metal Cutting Blades in the Greater Phoenix, AZ Area'/>
        <div className={s.wrapper}>
            <div className={`container ${s.content}`}>
                <div className={s.subTitle}>
                    <SubTitle subTitle='Cold Saws'/>
                </div>
                <div className={s.title}>NEW COLD SAW OPERATION</div>
                <div className={s.text}>
                    Along with sharpening, we have a vast array of new cold saws blanks, ready to be toothed up to your
                    desired tooth count and grind. We have invested in multiple state-of-the-art cold saw grinders that
                    are as efficient as they are accurate.
                </div>
                <div className={s.images}>
                    <img src={image1} alt=""/>
                    <img src={image2} alt=""/>
                </div>

                <div className={s.text}>
                    When purchasing your new coldsaw you also can pick out the type of tooth pattern that will fit best
                    for the work you are doing. The &quot;BW&quot;, also known as an alternating bevel, and
                    the &quot;C&quot;, also known as a triple chip, are the most common tooth patterns choosen. There is
                    also the choice of an &quot;A&quot; or &quot;AW&quot;, which are more of a straight up and down type
                    teeth.
                </div>
                <div className={s.images2}>
                    <img src={image4} alt=""/>
                    <img src={image3} alt=""/>
                    <img src={image5} alt=""/>
                </div>

                <div className={s.title}>COLD SAW PRICING</div>
                <div className={s.text}>
                    The following is a list of our coldsaw prices. Prices include the blank and toothing it to the
                    number of teeth needed and tooth pattern. Note that any blade needing 300 or more teeth, there is an
                    added charge of $5.00. Most of these sizes we have in stock on site, if we don&apos;t we will get
                    them in quickly for you, just call ahead to check inventory.
                </div>
                <div className={s.tablesWrapper}>
                    <div className={s.tableTitle}>**Here is an added source to help pick tooth numbers**</div>
                    <div className={s.tables}>
                        <div>
                            <img src={image6} alt=""/>
                        </div>
                        <div>
                            <table className={s.table}>
                                <tbody>
                                <tr>
                                    <th>Diameter</th>
                                    <th>Thickness</th>
                                    <th>Bore</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td>225mm</td>
                                    <td>2.0mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 81.25</td>
                                </tr>
                                <tr>
                                    <td>250mm</td>
                                    <td>2.0mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 83.50</td>
                                </tr>
                                <tr>
                                    <td>250mm</td>
                                    <td>2.5mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 96.50</td>
                                </tr>
                                <tr>
                                    <td>275mm</td>
                                    <td>2.0mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 103.50</td>
                                </tr>
                                <tr>
                                    <td>275mm</td>
                                    <td>2.5mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 106.50</td>
                                </tr>
                                <tr>
                                    <td>300mm</td>
                                    <td>2.5mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 134.75</td>
                                </tr>
                                <tr>
                                    <td>315mm</td>
                                    <td>2.0mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 136.50</td>
                                </tr>
                                <tr>
                                    <td>315mm</td>
                                    <td>2.5mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 145.00</td>
                                </tr>
                                <tr>
                                    <td>350mm</td>
                                    <td>2.5mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 168.25</td>
                                </tr>
                                <tr>
                                    <td>350mm</td>
                                    <td>3.0mm</td>
                                    <td>32/40mm</td>
                                    <td>$ 199.00</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className={s.discount}>
                                <div className={s.discountTitle}>Volume Discount!</div>
                                <div className={s.discountValue}>{'>'} Buy 2 or more and get an additional 5% off the
                                    listed prices
                                </div>
                                <div className={s.discountValue}>{'>'} No shipping charges for pick up</div>
                                <div className={s.discountValue}>{'>'} Orders are typically ready in 24 hrs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
