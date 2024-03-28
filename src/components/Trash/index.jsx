import React from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from './style.module.css'


export default function Trash() {
    return (
        <div className={styles.main}>
            <BsFillTrash3Fill />
            <BsThreeDotsVertical />
        </div>
    )
}
