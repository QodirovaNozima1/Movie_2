import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <div className='bg-white text-black dark:bg-black py-5'>
        <Header/>
        <main className='mb-56 min-h-screen bg-white text-black dark:bg-black py-5'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout