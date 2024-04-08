import React from 'react'
import infoData from "../../data/infoData.json"
import "./Header.css"

function Header() {
    const data = infoData;
    
    return (
        <header className="site-header">
            <div className="logo-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={data["info"]["logo"]} alt="" className='logo' />

                    <img src={data["info"]["logoTitle"]} alt="" className='logo-title' />
                </a>
            </div>

            <div className="navigation-container">
                <div className="main-content">
                    <span>0032 478 52 86 02</span>
                    <button className='language-btn'>NL</button>
                </div>

                <div className="secondary-content">

                </div>
            </div>

            <button className="hamburger-btn">
                <span className='bar bar1'></span>
                <span className='bar bar2'></span>
                <span className='bar bar3'></span>
            </button>
        </header>
    )
}

export default Header