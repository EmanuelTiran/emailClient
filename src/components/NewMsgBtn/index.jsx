import React from 'react'
import style from "./style.module.css";
import { MdEmail } from "react-icons/md";


export default function NewMsgBtn() {
    return (
        <button className={style.main}>
            <div >
                <MdEmail className={style.icon} />
            </div>
            <div className={style.context}>

                <p className={style.text}>New message</p>
            </div>
        </button>
    )
}