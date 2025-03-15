/* eslint-disable import/no-useless-path-segments */
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navabr';
import Footer from './../components/Footer';
import Chatbot from '../components/Chatbot';
// import Chatbot from './../components/Chatbot'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => (
    <div className='w-full flex flex-col '>
      <Navbar/>
      <Chatbot />
      <Outlet />
      <Footer/>
    </div>
  )

export default Layout