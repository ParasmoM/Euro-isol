import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

function Header({ data }) {
    return <>
        <div className='header-container'>
            <div className="header-content">
                <div className="header-logo">
                    <HeaderLogo />
                </div>

                <div className="header-menu">
                    <HeaderMenu data={data} />
                </div>
            </div>
        </div>
    </>
}

function HeaderLogo() {
    return (
        <Link to={`/home`} rel="noopener noreferrer">
            <img src={'/public/logo.svg'} alt="" className='logo' />
            <img src={'/public/logo-title.svg'} alt="" className='logo-title' />
        </Link>
    )
}

function HeaderMenu({ data }) {
    const { currentLang, handleLanguageChange } = useContext(LanguageContext);


    return (
        <>
            {data[currentLang].map((item, index) => (
                <Link key={index} to={item.href}>
                    {item.title}
                </Link>
            ))}
            <div className="lang-menu">
                <div className='selected-lang'>
                    {currentLang}
                </div>

                <ul className=''>
                    {['fr', 'nl', 'en'].map(lang => (
                        lang !== currentLang &&
                        <li
                            key={lang}
                            className=''
                            onClick={() => handleLanguageChange(lang)}
                        >
                            {lang.toUpperCase()}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Header