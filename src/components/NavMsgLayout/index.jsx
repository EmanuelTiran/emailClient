import React from 'react'
import { Outlet } from "react-router-dom";
import NavMsg from '../NavMessage'
import styles from './style.module.css';

export default function MessagesLayout() {
    return (
      <>
        <NavMsg />
        <Outlet />
      </>
    );
  }
