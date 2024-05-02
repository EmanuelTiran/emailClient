import React, { useState} from 'react'
import styles from './style.module.css';
import { Routes, Route } from "react-router-dom";
import Login from '../Login Page';
import Register from '../Register page';
import NavMain from '../NavMain';
import NavMsg from '../NavMessage';
import MainLayot from '../NavMainLayout';
import MessagesLayout from '../NavMsgLayout';
import EmailPage from '../EmailPage';
import EmailItem from '../TextArea';
import EmailForm from '../EmailForm';
import Auth from '../Auth';

export default function Layout() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<NavMain />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* <Route path="/" element={<Auth />}> */}
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
            <Route path=":emailType" element={<EmailPage />} >
              <Route path=":emailId" element={<><EmailItem /></>} >
              </Route>
            </Route>
              <Route path="newmsgbtn" element={<><EmailForm /></>}>
              </Route>
          </Route>
          <Route path="stats" element={<h1>Stats</h1>}>
          </Route>
          <Route path="videocam" element={<h1>Videocam</h1>}>
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  )
}
