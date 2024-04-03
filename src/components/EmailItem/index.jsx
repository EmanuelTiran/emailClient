import React, { useState } from 'react';
import styles from './style.module.css'
import { FaBold } from "react-icons/fa";
import { PiTextItalicBold } from "react-icons/pi";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export default function EmailItem() {
    const [text, setText] = useState('');
    const [alignRight, setAlignRight] = useState(false);
    const [italic, setItalic] = useState(false);
    const [bold, setBold] = useState(false);

    const handleAlignmentChange = () => {
        setAlignRight(!alignRight);
    };

    const handleItalicChange = () => {
        setItalic(!italic);
    };
    const handleBoldChange = () => {
        setBold(!bold);
    };

    const handleSubmit = () => {
        // פעולות לשליחת הטקסט
        console.log("טקסט שנשלח:", text);
    };

    return (
        <div className={styles.main} title='עמנואל'>
            <textarea
                className={`${styles.textarea} ${alignRight ? styles.alignRight : ''} ${italic ? styles.italic : ''}  ${bold ? styles.bold : ''}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="הזן טקסט כאן..."
            ></textarea>
            <div className={styles.btns}>
                <button className={`${styles.align} ${styles.button}`} onClick={handleAlignmentChange}>
                    {alignRight ? <FaAlignLeft /> : <FaAlignRight />}
                </button>
                <button className={`${styles.button}`} onClick={handleBoldChange}>
                     <FaBold />
                </button>
                <button className={`${styles.italic} ${styles.button}`} onClick={handleItalicChange}>
                  <PiTextItalicBold /> 
                </button>
                <button className={`${styles.send} ${styles.button}`} onClick={handleSubmit}><IoIosSend/></button>
            </div>
        </div>
    );
}
