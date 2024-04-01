import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

import styles from './style.module.css'


export default function InputSearch() {
    return (
      <div className={styles.searchContainer}>
                <IoSearchSharp className={styles.searchIcon}/>
            <input type="text" className={styles.searchInput} placeholder="search" />
        </div>
    )
}
