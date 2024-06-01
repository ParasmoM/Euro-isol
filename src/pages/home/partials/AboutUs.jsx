import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs({ data, lang }) {
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