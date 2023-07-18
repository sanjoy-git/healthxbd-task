import React from 'react'
import logo from '../assets/images/we-care.jpg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header style={{textAlign:'center'}}>
      <div className='navbar'>
        <img src={logo} alt="" />
        <nav>
          <NavLink to="/">Featured</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Fasilities</NavLink>
          <NavLink to="/">Find Doctor</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
        <a href="">Book Now</a>
      </div>
    </header>
  )
}
