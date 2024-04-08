import React, { useState } from 'react';
import styles from './style.module.css';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";

export default function EmailItem() {
    const [chooseColor, setChooseColor] = useState(false);
    const [textColor, setTextColor] = useState('black');
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


    const colors = ["black", "red", "blue", "green", "yellow", "purple", "orange", "pink", "gray"];
    return (
        <div className={`${styles.container}`} >
            <textarea style={{ fontSize: "20px", color: textColor }} className={`${alignRight ? styles.alignRight : ''} ${italic ? styles.italic : ''}  ${bold ? styles.bold : ''}`} />
            <div className={styles.textTools}>
                <div className={styles.textEditorToolbar}>
                    <div className={styles.tool} onClick={handleBoldChange}>
                        <FaBold />
                    </div>
                    <div className={styles.tool} onClick={handleItalicChange} >
                        <FaItalic />
                    </div>
                    <div className={styles.tool}>
                        <FaUnderline />
                    </div>
                    {chooseColor && (
                        <div className={styles.chooseColor} >
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    onClick={() => setTextColor(color)}
                                    className={styles.color}
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    )}
                    <div className={styles.tool} onClick={() => setChooseColor(!chooseColor)}>
                        <IoColorFill />
                    </div>
                </div>
                <div className={styles.textAlignmentToolbar}>
                    <div className={styles.tool} onClick={handleAlignmentChange}>
                        <FaAlignLeft />
                    </div>
                    <div className={styles.tool}>
                        <FaAlignCenter />
                    </div>
                    <div className={styles.tool}>
                        <FaAlignRight />
                    </div>
                    <div className={styles.tool}>
                        <FaAlignJustify />
                    </div>
                </div>
            </div>
        </div>
    );
}