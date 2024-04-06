import React from 'react'
import styles from './style.module.css';
import { Routes, Route } from "react-router-dom";
import Login from '../Login Page';
import NavMain from '../NavMain';
import NavMsg from '../NavMessage';
import MainLayot from '../NavMainLayout';
import MessagesLayout from '../NavMsgLayout';
import EmailPage from '../EmailPage';
import EmailItem from '../EmailItem';

export default function Layout() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<NavMain />} /> */}
        <Route path="login" element={<Login />} />

        <Route element={<MainLayot />}>
          <Route path="" element={<h1>Home</h1>}>
          </Route>
          <Route path="timer" element={<h1>timer</h1>}>
          </Route>
          <Route path="task" element={<h1>task</h1>}>
          </Route>
          <Route path="watch" element={<h1>watch</h1>}>
          </Route>
          <Route path="messages" element={<MessagesLayout />}>
            <Route path=":emailType" element={<EmailPage />} />
            <Route path=":emailType/:emailId" element={<><EmailPage /><EmailItem /></>} >
            </Route>
          </Route>
          <Route path="stats" element={<h1>stats</h1>}>
          </Route>
          <Route path="videocam" element={<h1>videocam</h1>}>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
