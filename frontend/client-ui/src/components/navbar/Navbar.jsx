import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-ul'>
        <li className='nav-li'><a className='a' href="https://www.example.com">Home</a></li>
        <li className='nav-li'><a className='a' href="https://www.example.com">About Us</a></li>
      </ul>
    </div>
  )
}

export default Navbar
