import React, { type FC, useState } from 'react'

import s from './index.module.scss'
import { publicRoutes } from '../../../router'
import { NavLink } from 'react-router-dom'
import { address, contactPhone } from '../../../config'
import { SocialMedia } from '../SocialMedia'

export const Footer: FC = () => {
  const [values, setValues] = useState({ name: '', email: '' })
  const onValuesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(values)
  }

  return (
        <footer className={s.wrapper}>
            <div className={`container ${s.content}`}>
                <div className={s.column}>
                    <div className={s.title}>Browse our website</div>
                    <nav className={s.nav}>
                        {publicRoutes.map(({ path, title }) => (
                            <NavLink
                                key={path}
                                to={(path ?? '/')}
                                className={({ isActive }) => (
                                  isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
                                )}
                            >
                                {title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div className={s.column}>
                    <div className={s.title}>Contact Information</div>
                    <div className={s.telephone}>Telephone:</div>
                    <div>{contactPhone}</div>
                    <div className={s.address}>Address:</div>
                    <div>{address}</div>
                    <div className={s.socialMedia}>
                        <SocialMedia/>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.title}>Join our Mailing List</div>

                    <div>Please fill out the form below.</div>
                    <form className={s.form} onSubmit={submit}>
                        <input type="text" name='name' className={s.input} placeholder={'Name'} value={values.name}
                               onChange={onValuesChange}/>
                        <input type="email" name='email' className={s.input} required placeholder={'* E-mail'}
                               value={values.email} onChange={onValuesChange}/>
                        <button type='submit' className={s.submit} onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
            <div className={s.disclaimer}>
                <div className={`container ${s.text}`}>Images provided on this website are for personal, non-commercial use.
                    Republication, retransmission, or reproduction of such images is strictly prohibited.
                </div>
            </div>
        </footer>
  )
}
