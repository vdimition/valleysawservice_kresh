import React, { type FC, useState } from 'react'

import { Map, Title } from '../../common'
import { address, contactPhone } from '../../../config'

import s from './index.module.scss'

import image1 from '../../../images/904-455w.webp'
import image2 from '../../../images/visa.png'
import image3 from '../../../images/mastercard.png'
import image4 from '../../../images/discover.png'
import image5 from '../../../images/credit_alt.png'
import image6 from '../../../images/cash.png'
import image7 from '../../../images/amex.png'

const defaultValues = { name: '', email: '', phone: '', text: '' }

export const Contact: FC = () => {
  const [values, setValues] = useState(defaultValues)

  const onValuesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(values)
    setValues(defaultValues)
  }
  return (
        <>
            <Title title='Saw Sharpening Company in the Greater Phoenix, AZ Area'/>

            <div className={s.wrapper}>
                <div className='container'>
                    <div className={s.flex}>
                        <div className={s.column}>
                            <div className={s.mt28}><span className={s.bold}>Address:</span> {address}</div>
                            <div className={s.mt28}><span className={s.bold}>Phone:</span> {contactPhone}</div>
                            <div className={s.mt28}><span className={s.bold}>Hours of Operation:</span></div>
                            <div className={s.schedule}>
                                <div className={s.minW}>Mon-Thurs</div>
                                6:00 AM - 3:30 PM
                            </div>
                            <div className={s.schedule}>
                                <div className={s.minW}>Friday</div>
                                6:00 AM - 2:30 PM
                            </div>
                            <div className={s.schedule}>
                                <div className={s.minW}>Sat-Sun</div>
                                Closed
                            </div>
                            <div className={s.schedule}>*Except Major Holidays*</div>
                        </div>

                        <div className={s.column}>
                            <img src={image1} className={s.img} alt=""/>
                        </div>

                        <div className={s.column}>
                            <div className={s.bold}>Contact Form</div>
                            <form className={s.form} onSubmit={submit}>
                                <input className={s.input} required type="text" placeholder={'* Name'} name={'name'}
                                       value={values.name} onChange={onValuesChange}/>
                                <input className={s.input} required type="text" placeholder={'* Phone'} name={'phone'}
                                       value={values.phone} onChange={onValuesChange}/>
                                <input className={s.input} required type="email" placeholder={'* Email'} name={'email'}
                                       value={values.email} onChange={onValuesChange}/>
                                <textarea className={s.textarea} name={'text'} value={values.text}
                                          onChange={onValuesChange}/>
                                <button className={s.submit} type='submit' onClick={submit}>Submit</button>
                            </form>

                            <div className={s.payments}>
                                <img src={image2} className={s.payment} alt=""/>
                                <img src={image3} className={s.payment} alt=""/>
                                <img src={image4} className={s.payment} alt=""/>
                                <img src={image7} className={s.payment} alt=""/>
                                <img src={image6} className={s.payment} alt=""/>
                                <img src={image5} className={s.payment} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Map/>
        </>
  )
}
