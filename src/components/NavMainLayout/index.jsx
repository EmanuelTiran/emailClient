import React from 'react'
import NavMain from '../NavMain'
import { Outlet } from "react-router-dom";
import style from './style.module.css';
export default function MainLayout() {
  return (
    <div className={style.main}>
      <NavMain />
      <Outlet />
    </div>

  );
}