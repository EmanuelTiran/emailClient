import React from 'react'
import styles from './style.module.css'
import { IoMdVideocam } from "react-icons/io";
// import { IoMdVideocam, IoIosTimer, MdOutlineTask, FaRegEye, IoMdPeople, IoIosStats } from "react-icons/io";

export default function IconMain({ icon, title }) {
    return (
        <div>
            <div className={styles.icon} title={title}>{icon}</div>
        </div>
    )
}
