import React from 'react'
import logo from '../assets/TodoLogo.png'

const Header = () => {
    
    return (
        <div className="navbar navbar-light">
            <img src={logo} className="logo_img d-inline-block align-top" alt=""/>
            <div className="display-5">WELCOME !</div>
        </div>
    )
}

export default Header
