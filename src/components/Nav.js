import React from 'react'
import './styles/Nav.css'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-inner'>
        <Link to="/Contact" className='nav-link'>Contact us</Link>
        <button className='nav-btn'>Signup</button>
      </div>
    </div>
  )
}

export default Nav