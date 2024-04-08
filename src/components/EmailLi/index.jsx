import React, { useEffect, useState } from "react";
import axios from 'axios';

import styles from './style.module.css'
import { FaStar } from "react-icons/fa";


export default function EmailLi({ sender, subject, img, count, date }) {
  const [flag, setFlag] = useState(true);
  const [senderName, setSenderName] = useState('');
  const [senderAvatar, setSenderAvatar] = useState('');
  const [time, setTime] = useState();

  const nameUser = (id) => {
    axios.get(`http://localhost:5050/user/name/${id}`)
      .then(response => {
        setSenderName(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }
  const AvatarUser = (id) => {
    axios.get(`http://localhost:5050/user/avatar/${id}`)
      .then(response => {
        setSenderAvatar(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }
  useEffect(() => {
    nameUser(sender);
    AvatarUser(sender)
    console.log(date);
    const date1 = new Date(date);
    const shaa = date1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(shaa)
    console.log("shaa:", shaa);
  }, []);

  return (
    <div className={styles.main} title='עמנואל'> <div className={styles.pictureSub}>
      <img className={styles.image} src={senderAvatar} />
      <div>
        <div className={styles.name}>{senderName}</div>
        <div className={styles.subject}>{subject}</div></div>
    </div>
      <div className={styles.rightSide}>
        <div className={styles.clock}>{time}</div>
        {count ? (
          <div className={styles.count}>+{count}</div>
        ) : (
          flag ? (
            <FaStar className={styles.starOn} onClick={() => setFlag(!flag)} />
          ) : (
            <FaStar className={styles.starOff} onClick={() => setFlag(!flag)} />
          )
        )}
      </div>
    </div>
  )
}
