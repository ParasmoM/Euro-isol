import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HamburgerButton({ open, setOpen, data, lang }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(true);
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, setOpen]);

    return (
        <div className={`hamburger`} ref={wrapperRef}>
            <button className={`hamburger-btn ${open ? 'open' : '' }`} onClick={() => setOpen(!open)}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </button>
        </div>
    );
}

export default HamburgerButton;