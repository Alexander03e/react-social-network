import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () =>{

    return (

        <header className='header'>
            <div className='container'>
                <h1 className='header__logo'>MCN</h1>
            </div>
        </header>
    )
}

export default Header