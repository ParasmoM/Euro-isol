import React from 'react'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function LandingSpot({ data, lang }) {
    const title = data[lang]["title"];
    const companyName = "EURO-ISOL";
    const parts = title.split(companyName);
    const button = data[lang]["button"];

    useIntersectionObserver('landing-spot-title', 'fade-in');
    useIntersectionObserver('landing-spot-link', 'fade-in');

    return <>
        <div className='landing-spot-container'>
            <h1 className='landing-spot-title'>
                {parts[0]}
                <span className='company-name'>{companyName}</span>
                {parts[1]}
            </h1>

            <Link
                to={`/catalog`}
                className='landing-spot-link'
            >
                {button}
            </Link>
        </div>
    </>
}

export default LandingSpot