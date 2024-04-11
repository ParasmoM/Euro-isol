import React from 'react'
import Header from '../../components/header/Header'
import LandingSpot from './partials/LandingSpot'

function PageHome() {
    
    return (
        <div className='page-home'>
            <Header />

            <main className='page-home-content'>
                <LandingSpot />
            </main>
        </div>
    )
}

export default PageHome