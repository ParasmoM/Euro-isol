import React from 'react'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function AboutUs({ data, lang }) {
    useIntersectionObserver('about-us-title', 'fade-in');
    useIntersectionObserver('about-us-description', 'fade-in');
    useIntersectionObserver('about-us-link', 'fade-in');

    return <>
        <div className="about-us-container">

            <h1 className="about-us-title">{data[lang]["title"]}</h1>

            <p className="about-us-description">
                {data[lang]["content"]}
            </p>

            <Link
                to={`/about`}
                className="about-us-link"
            >
                {data[lang]["button"]}
            </Link>

        </div>
    </>
}


export default AboutUs