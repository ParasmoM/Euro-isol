import React from 'react'

function Copyright({ name }) {
    const year = new Date().getFullYear();

    return <>
        <p>© {year} - <span>{name}</span></p>
        <a href="https://www.marcoparasmo.com" target="_blank" rel="noopener noreferrer">powered by PARASMO</a>
    </>
}

export default Copyright