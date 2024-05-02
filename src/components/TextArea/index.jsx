import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function EmailItem({ chats }) {
    const [chooseColor, setChooseColor] = useState(false);
    const [textColor, setTextColor] = useState('black');
    const [alignRight, setAlignRight] = useState(false);
    const [italic, setItalic] = useState(false);
    const [bold, setBold] = useState(false);
    const [underLine, setUnderLine] = useState(false);
    const [dataMail, setDataMail] = useState([]);
    const [load, setLoad] = useState(false);

    let { emailId } = useParams();


    const handleAlignmentChange = () => {
        setAlignRight(!alignRight);
    };
    const handleItalicChange = () => {
        setItalic(!italic);
    };
    const handleBoldChange = () => {
        setBold(!bold);
    };
    const handleUnderLine = () => {
        setUnderLine(!underLine);
        console.log(underLine);
    };
    useEffect(() => {
        axios.get(`http://localhost:5050/email/${emailId}`)
            .then(response => {
                // console.log(response)
                setDataMail(response.data);
                console.log("response uniq mail:", response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            }).finally(() => {
                setLoad(false);
            });
    }, []);

    const colors = ["black", "red", "blue", "green", "yellow", "purple", "orange", "pink", "gray"];
    return (
        <div>
            <div>
                {dataMail.subject}
            </div>
            <div className={styles.message}>
                {dataMail.messages && dataMail.messages.map((msg, index) => (
                    <div key={msg._id} className={styles.message}>
                        <p className={styles.from}>From: {msg.from}</p>
                        <p className={styles.date}>Date: {new Date(msg.date).toLocaleString()}</p>
                        <p className={styles.content}>Content: {msg.content}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles.container}`} >
                <textarea s={{ fontSize: "20px", color: textColor }} className={`${alignRight ? styles.alignRight : ''} ${italic ? styles.italic : ''}  ${bold ? styles.bold : ''} ${underLine ? styles.underLine : ''}`} />
                <div className={styles.textTools}>
                    <div className={styles.textEditorToolbar}>
                        <div className={styles.tool} onClick={handleBoldChange}>
                            <FaBold />
                        </div>
                        <div className={styles.tool} onClick={handleItalicChange} >
                            <FaItalic />
                        </div>
                        <div className={styles.tool} onClick={handleUnderLine}>
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
        </div>
    );
}