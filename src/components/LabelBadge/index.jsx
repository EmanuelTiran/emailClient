import React from 'react'

import styles from './style.module.css'


export default function LabelBadge({ color, label }) {
    return (
        <div className={styles.container}>
            <div style={{ backgroundColor: color }} className={styles.sqr}></div>
            <div style={{ backgroundColor: color }} className={styles.triangle}></div>
            {label}
        </div>
    )
}
