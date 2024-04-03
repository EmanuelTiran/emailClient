import React from 'react'

import { useParams, NavLink } from 'react-router-dom';

import style from './style.module.css'
import Search from '../BoxSearch'
import EmailLi from '../EmailLi'


export default function EmailPage({ color, label }) {

    let { emailType } = useParams();

    const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "jbdjkk" },
    { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "jbdjkk" },
    ]
    return (

        <div className={style.container}>
            <h1>{emailType} </h1>
            <Search />
            {emailData.map((mail, index) => (
                <NavLink
                    to={`${mail.id}`}
                    className={({ isActive }) =>
                        isActive ? style.isActive : ""
                    }
                >
                    <EmailLi key={index} count={mail.count} name={mail.name} subject={mail.subject} className={style.liMail} />
                </NavLink>

            ))}
        </div>
    )
}
