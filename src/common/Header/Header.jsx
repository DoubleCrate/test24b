import React from 'react'
import logo from '../../logo.svg'
import './Header.css'
import '../../App.css'

const Header = () => {
  return (
    <header className='header-class'>
        <div className='wrapper-class'>
            <img src={logo} alt="logo" className='logo-class'/>
            <nav>
                <ul className='ul-menu-class'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Dimmi omacciuolo... cosa fa rima con allegro?</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header