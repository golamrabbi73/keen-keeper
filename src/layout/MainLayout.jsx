import React from 'react'
import Navbar from '../components/shared/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/shared/footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar />

        <main>
          <Outlet />
        </main>
        
        <Footer />
    </div>
  )
}

export default MainLayout