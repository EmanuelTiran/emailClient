import { BrowserRouter } from "react-router-dom";

import './App.css'
import React from 'react'
import Badge from './components/Badge'
import Send from './components/Send'
import Trash from './components/Trash'
import LabelBadge from './components/LabelBadge'
import EmailLi from './components/EmailLi'
import InputSearch from './components/BoxSearch'
import Popup from './components/Popup'
import Login from './components/Login Page'
import Registration from './components/Register page'
import NavMain from './components/NavMain'
import NavMsg from './components/NavMessage'
import Layout from './components/Layout'
import EmailPage from './components/EmailPage'
import EmailItem from './components/TextArea'

import { useState } from 'react';
import DataContext from './useContext/context'
import EmailForm from "./components/EmailForm";
export default function App() {
  const badgeData = [
    { color: "red", label: "Label 1" },
    { color: "green", label: "Label 2" },
    { color: "blue", label: "Label 3" },
    { color: "purple", label: "Label 4" },
    { color: "orange", label: "Label 5" },
    { color: "yellow", label: "Label 6" },
    { color: "cyan", label: "Label 7" },
    { color: "magenta", label: "Label 8" },
    { color: "pink", label: "Label 9" },
    { color: "brown", label: "Label 10" }
  ];
  const [text, setText] = useState("meir");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (name) => {
    console.log(name);
    setText(name);
    setOpen(!open);
  };
  return (
    <div className='app'>
      <Layout/>
      {/* <DetailMail/> */}
      {/* <EmailForm/> */}
{/* <EmailItem/> */}
      {/* <EmailPage /> */}
      {/* <NavMain />
        <NavMsg/>
        <Registration />
        <Login />
        <Send />
        <Trash />
        <Badge />
        {badgeData.map((badge, index) => (
          <LabelBadge key={index} color={badge.color} label={badge.label} />
        ))}
        <EmailLi count={count} />
        <InputSearch />
        <button onClick={() => handleClick("Popup")}>Popup</button>
        <DataContext.Provider value={{ text, setText, open, setOpen }}>
          <Popup />
        </DataContext.Provider> */}
    </div>

  )
}
