// import React from 'react'

// Components
import logo from '../../img/logo.jpg'
import Nav from '../Nav/Nav'

//Styles
import '../../style/components/header.scss'

export default function Header() {
    return(
        <header className="header">
            <div className="container header__container">
                <img className="header__logo" src={logo} alt="logo" />
                <Nav/>
            </div>
        </header>
    )
}