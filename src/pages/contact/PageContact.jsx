import React from 'react'
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import useTitle from '../../hooks/useTitle';

function PageContact({ data, lang }) {
    const content = data[lang];

    useTitle("Euro-Isol", lang);

    return (
        <main className='page-contact'>
            <div className="page-contact-container">
                <div>
                    <Breadcrumb lang={lang} />

                    <h1 className="contact-title">{content["title"]}</h1>

                    <form className="contact-form">

                        <div className="contact-form-section">
                            <label htmlFor="first-name" className="contact-form-label">
                                {content["label"]["firstName"]}
                                <input type="text" id="first-name" className="contact-form-input" />
                            </label>

                            <label htmlFor="last-name" className="contact-form-label">
                                {content["label"]["lastName"]}
                                <input type="text" id="last-name" className="contact-form-input" />
                            </label>
                        </div>

                        <div className="contact-form-section">
                            <label htmlFor="email" className="contact-form-label">
                                {content["label"]["email"]}
                                <input type="email" id="email" className="contact-form-input" />
                            </label>

                            <label htmlFor="phone-number" className="contact-form-label">
                                {content["label"]["phone"]}
                                <input type="tel" id="phone-number" className="contact-form-input" />
                            </label>
                        </div>

                        {/* <div className="contact-form-subject">
        <label htmlFor="subject" className="contact-form-label">
        {content["label"]["subject"]}
            <input type="text" id="subject" className="contact-form-input" />
        </label>
    </div> */}

                        <p className="contact-form-description">
                            {content["paragraph"]}
                        </p>

                        <div className="contact-form-message">
                            <label htmlFor="message" className="contact-form-label">
                                {content["label"]["message"]}
                                <textarea name="message" id="message" className="contact-form-textarea"></textarea>
                            </label>
                        </div>

                        <input type="submit" value={`${content["button"]}`} className="contact-form-button" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default PageContact