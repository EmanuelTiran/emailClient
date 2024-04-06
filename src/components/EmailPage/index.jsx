import React, { useEffect, useState } from "react";

import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

import style from './style.module.css'
import Search from '../BoxSearch'
import EmailLi from '../EmailLi'
import { CiLight } from 'react-icons/ci';


export default function EmailPage({ color, label }) {
    const [dataMail, setDataMail] = useState([]);

    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const urlWithoutLastWord = parts.slice(0, parts.length - 1).join('/');
    console.log(urlWithoutLastWord);
    let { emailType, emailId } = useParams();

    // const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "Emanuel" },
    // { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "Tiran" },
    // ]
    const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "Emanuel" },
    { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "Tiran" },
    ]

     useEffect(() => {
        axios.get('http://localhost:5050/user/inbox')
          .then(response => {
            setDataMail(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }, []);
    return (

        <div className={style.container}>
            <h1>{emailType} </h1>
            <Search />
            {emailData.map((mail, index) => (
                <NavLink
                to={emailId ? `${urlWithoutLastWord}/${mail.id}` : `${mail.id}`}
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
