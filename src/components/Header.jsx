import React from 'react'
import Snap from '../assets/images/logo.svg'
import './Header.css'
import ArrowDown from '../assets/images/icon-arrow-down.svg'

function Header() {
  return (
    <>
    <div className='Header'>
        <div className='Header-1'>
            <figure className='h-image'>
                <img src={Snap} alt='snap'
/>
            </figure>
            <ul>
                <li>Features <img src={ArrowDown} className='arrowdown' alt="arrow down" /></li>
                <li>Company <img src={ArrowDown} className='arrowdown' alt="arrow down" /></li>
                <li>Careers</li>
                <li>About</li>
            </ul>

        </div>

        <div >
            <a className='link' href="#">Login</a>
            <button className='register'>Register</button>

        </div>
    </div>
    
    </>
  )
}

export default Header