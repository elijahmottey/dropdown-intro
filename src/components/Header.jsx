import React from 'react'
import Snap from '../assets/images/logo.svg'
import './Header.css'

function Header() {
  return (
    <>
    <div className='Header'>
        <div className='Header-1'>
            <figure>
                <img src={Snap} alt='snap'
/>
            </figure>
            <ul>
                <li>Features</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>

        </div>

        <div>
            <a href="#">Login</a>
            <a><button>Register</button></a>

        </div>
    </div>
    
    </>
  )
}

export default Header