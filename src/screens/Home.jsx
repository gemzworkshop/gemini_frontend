import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { ChatArea } from '../components/ChatArea'
  
export const Home = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className="main">
        <Navbar />
        <ChatArea />
      </div>
    </div>
  )
}
