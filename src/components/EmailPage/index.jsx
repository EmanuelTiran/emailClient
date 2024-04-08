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

    let { emailType ,emailId} = useParams();
    // const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "Emanuel" },
    // { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "Tiran" },
    // ]
    const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "Emanuel" },
    { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "Tiran" },
    ]

    useEffect(() => {
        setDataMail([])
        axios.get(`http://localhost:5050/user/${emailType}`)
            .then(response => {
                console.log(response)
                setDataMail(response.data.chats);
                console.log(response.data);
                // console.log("senderID", response.data.chats[0].chat.msg[response.data.chats[0].chat.msg.length - 1].from._id);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [emailType]);




    return (

        <div className={style.container}>
            <h1>{emailType} </h1>
            <Search />
            {dataMail && dataMail.map((mail, index) => (
                <NavLink
                    to={emailId ? `${urlWithoutLastWord}/${mail._id}` : `${mail._id}`}
                    className={({ isActive }) =>
                        isActive ? style.isActive : ""
                    }
                >
                    <EmailLi key={index} count={mail.chat.msg.length} sender={mail.chat.msg[mail.chat.msg.length - 1].from._id} subject={mail.chat.subject} date={mail.chat.msg[mail.chat.msg.length - 1].date} className={style.liMail} />
                </NavLink>

            ))}
        </div>
    )
}
