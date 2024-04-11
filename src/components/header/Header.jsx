import React from 'react'
import infoData from "../../data/infoData.json"
import useToggle from "../../hooks/useToggle.js";
import { Link } from 'react-router-dom';

function Header() {
    const data = infoData;
    const [isHamburgerMenuOpen, toggleHamburgerMenu] = useToggle(false);
    console.log(isHamburgerMenuOpen);
    return (
        <header className="site-header">
            <div className="logo-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={data["info"]["logo"]} alt="" className='logo' />

                    <img src={data["info"]["logoTitle"]} alt="" className='logo-title' />
                </a>
            </div>

            <div className="navigation-container">
                <div className={`main-content ${isHamburgerMenuOpen ? '' : ' no-show'}`}>
                    <span className='number'>0032 478 52 86 02</span>
                    <button className='language-btn'>NL</button>
                </div>

                <div className={`secondary-content ${isHamburgerMenuOpen ? ' show' : ''}`}>
                    <a to="/">À propos</a>
                    <a to="/">Nos produits</a>
                    <a to="/">Demander un devis</a>
                </div>
            </div>

            <button className={`hamburger-btn ${isHamburgerMenuOpen ? ' show' : ''}`} onClick={toggleHamburgerMenu}>
                <span className='bar bar1'></span>
                <span className='bar bar2'></span>
                <span className='bar bar3'></span>
            </button>
        </header>
    )
}

export default Header