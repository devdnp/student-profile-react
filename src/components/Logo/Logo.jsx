import React from 'react'
import './Logo.css'
import LOGO from './logo.jpg'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={LOGO} alt="logo" className='img-fluid'/>
    </div>
  )
}

export default Logo