import React, { useEffect, useState } from "react";

import { useParams, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

import style from './style.module.css'
import Search from '../BoxSearch'
import EmailLi from '../EmailLi'
import useAxiosReq from '../useAxiosReq'


export default function EmailPage({ color, label }) {
    const [dataMail, setDataMail] = useState([]);
    const [load, setLoad] = useState(false);


    let { emailType } = useParams();

    const emailData = [{ name: "Emanuel", subject: "Subject", img: "./", count: 5, id: "Emanuel" },
    { name: "Shara", subject: "whatwup dude???", img: "./", count: 65, id: "Tiran" },
    ]

    useEffect(() => {
        setDataMail([])
        setLoad(true)
        axios.get(`http://localhost:5050/user/${emailType}`)
            .then(response => {
                console.log(response)
                setDataMail(response.data.chats);
                console.log("response.data:", response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            }).finally(() => {
                setLoad(false);
            });
    }, [emailType]);

    // console.log(data);



    return (
        <>
            <div className={`${style.container} `}>
                <h1>{emailType}</h1>
                <Search /><div className={`${load ? style.load : ""}`}>
                    {dataMail && dataMail.map((mail, index) => (
                        <NavLink
                            to={`${mail.chat._id}`}
                            className={({ isActive }) =>
                                isActive ? style.isActive : ""
                            }
                        ><div className={`${style.link}`}>
                                <EmailLi key={index} count={mail.chat.msg.length} sender={mail.chat.msg[mail.chat.msg.length - 1].from._id} subject={mail.chat.subject} date={mail.chat.msg[mail.chat.msg.length - 1].date} className={style.liMail} />
                            </div>
                        </NavLink>

                    ))}</div>
            </div>
            <Outlet />
        </>
    )
}
