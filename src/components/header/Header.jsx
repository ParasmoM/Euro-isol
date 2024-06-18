import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import HamburgerButton from './partials/HamburgerButton';

function Header({ data }) {
    const [open, setOpen] = useState(false);
    const lang = localStorage.getItem('lang') || 'fr';
    const headerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpen]);

    return <>
        <div className='header-container' ref={headerRef}>
            <div className="header-content">
                <div className="header-logo">
                    <HeaderLogo />
                </div>

                <div className="header-menu">
                    <HeaderMenu data={data} open={open} setOpen={setOpen} />
                </div>
            </div>

            <div className={`nav-bar-phone ${open ? 'open' : ''}`}>
                    {data[lang].map((item, index) => (
                        <Link key={index} to={item.href} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                </div>
        </div>
    </>
}

function HeaderLogo() {
    return (
        <Link to={`/home`} rel="noopener noreferrer">
            <img src={'/logo.svg'} alt="" className='logo' />
            <img src={'/logo-title.svg'} alt="" className='logo-title' />
        </Link>
    )
}

function HeaderMenu({ data, open, setOpen }) {
    const { currentLang, handleLanguageChange } = useContext(LanguageContext);
    // const [open, setOpen] = useState(false);
    
    return (
        <>
            <nav className="nav-bar">
                {data[currentLang].map((item, index) => (
                    <Link key={index} to={item.href}>
                        {item.title}
                    </Link>
                ))}
            </nav>

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
                            onClick={() => { 
                                handleLanguageChange(lang)
                            }}
                        >
                            {lang.toUpperCase()}
                        </li>
                    ))}
                </ul>
            </div>

            <>
                <HamburgerButton
                    open={open}
                    setOpen={setOpen}
                    data={data}
                    lang={currentLang}
                />
            </>
        </>
    )
}

export default Header