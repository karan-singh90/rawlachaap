import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Maincontent from '../../components/main/Main'

const Homepage = () => {
  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Maincontent/>
      <Footer/>
    </div>
  )
}

export default Homepage
