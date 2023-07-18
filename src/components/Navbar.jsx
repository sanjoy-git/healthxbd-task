import React from 'react'
import logo from '../assets/images/we-care.jpg'
import menu from '../assets/images/menu.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header style={{display:'flex',flexDirection:'column',alignItems:'center',position:"sticky",zIndex:'100',top:"0px",backgroundColor:"white"}}>
      <div className='navbar'>
        <a className='logo' href="/">
          <img src={logo} alt="wecare" />
        </a>
        <div className='navbar-nav'>
          <div className='nav-menu'>
            <img width={20} src={menu} alt="" />
            <nav>
              <NavLink to="/featured">Featured</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/fasilities">Fasilities</NavLink>
              <NavLink to="/finddoctor">Find Doctor</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
          <nav className='nav'>
            <NavLink to="/featured">Featured</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/fasilities">Fasilities</NavLink>
            <NavLink to="/finddoctor">Find Doctor</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <a href="">Book Now</a>
        </div>
      </div>
    </header>
  )
}
