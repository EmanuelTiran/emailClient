import React from 'react'
import Badge from './components/Badge'
import Send from './components/Send'
import Trash from './components/Trash'
import Rectangle from './components/Rectangle'
import EmailLi from './components/EmailLi'
import InputSearch from './components/BoxSearch'
export default function App() {
  return (
    <div>
      <Send />
      <Trash />
      <Badge />
      <Rectangle />
      <EmailLi />
      <InputSearch/>
    </div>
  )
}
