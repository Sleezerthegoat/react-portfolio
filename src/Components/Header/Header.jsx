import React from 'react';
import './Header.css';
import logo from '../../images/KVSM.png';

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
                    
                    <ul id="menuside">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i className="fa-solid fa-xmark" onClick={menuclose}></i>
                    </ul>

                    <i className="fa-solid fa-bars" onClick={menuopen}></i>
                </nav>
                <div className="header-text">
                    <p>3rd Year CSE student</p>
                    <h1>Hello, I'm <span>KVSM SOURISH</span><br /> from MAHE, Blore</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
