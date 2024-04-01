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

import { useState } from 'react';
import DataContext from './useContext/context'
export default function App() {

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
      <Registration/>
      <Login/>
      <Send />
      <Trash />
      {/* <Badge /> */}
      <LabelBadge />
      <EmailLi count={count} />
      <InputSearch />
      <button onClick={() => handleClick("Popup")}>Popup</button>
      <DataContext.Provider value={{ text, setText, open, setOpen }}>
        <Popup />
      </DataContext.Provider>    </div>
  )
}
