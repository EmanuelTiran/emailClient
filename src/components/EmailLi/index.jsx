import React, { useState } from 'react';

import styles from './style.module.css'
import { FaStar } from "react-icons/fa";


export default function EmailLi({ name, subject, img, count }) {
  const [flag, setFlag] = useState(true);

  return (
    <div className={styles.main} title='עמנואל'> <div className={styles.pictureSub}>
      <img className={styles.image} src="https://m.media-amazon.com/images/I/31p6ZFdyjvL._AC_UF350,350_QL80_.jpg" alt="" srcset="" />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.subject}>{subject}</div></div>
    </div>
      <div className={styles.rightSide}>
        <div className={styles.clock}>11:43</div>
        {count ? (
          <div className={styles.count}>{count}</div>
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
