import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Homepage = () => {
  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default Homepage
