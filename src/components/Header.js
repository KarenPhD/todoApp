import React from 'react'
import logo from '../assets/TodoLogo.png'

const Header = () => {
    
    return (
        <div className="navbar navbar-light">
            <img src={logo} className="logo_img d-inline-block align-top" alt=""/>
            <h1 className="display-5">WELCOME !</h1>
        </div>
    )
}

export default Header
