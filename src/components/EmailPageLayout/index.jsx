import React from 'react'
import EmailPage from '../EmailPage'
import { Outlet } from "react-router-dom";
import style from './styles.module.css';
export default function MainLayout() {
  return (
    <>
      <EmailPage />
      <Outlet />
    </>

  );
}