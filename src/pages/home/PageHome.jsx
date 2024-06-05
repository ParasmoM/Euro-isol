import React from 'react'
import LandingSpot from './partials/LandingSpot'
import WhyChooseUs from './partials/WhyChooseUs'
import AboutUs from './partials/AboutUs'
import ContactInformation from './partials/ContactInformation'
import useTitle from '../../hooks/useTitle'

function PageHome({ data, lang }) {
    useTitle("Euro-Isol", lang);

    return (
        <main className='page-home'>

            <section className='landing-spot'>
                <LandingSpot data={data["landingSpot"]} lang={lang} />
            </section>

            <section className='why-choose-us'>
                <WhyChooseUs data={data["whyChooseUs"]} lang={lang} />
            </section>

            <section className='about-us'>
                <AboutUs data={data["aboutUs"]} lang={lang} />
            </section>

            <section className="contact-information">
                <ContactInformation data={data["contactInformation"]} lang={lang} />
            </section>

        </main>
    )
}

export default PageHome