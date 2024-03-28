
import React from 'react'
import styles from './style.module.css'
import { IoIosSend } from "react-icons/io";

export default function Send() {
  return (
    <div className={styles.send}>
      <span>Send</span>
      <IoIosSend />
    </div>
  )
}
