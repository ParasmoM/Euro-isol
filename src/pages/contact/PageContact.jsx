import React from 'react'
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';

function PageContact() {
    const trail = usePageTrail();
    const path = trail.slice(0, 1).join('/');

    return (
        <main className='page-contact'>
            <div className="queue-container" >
                <Link to={'/home'}>Home</Link>
                <span>{'>'}</span>
                <Link to={`/${path}`}>{path}</Link>
            </div>

            <form className="contact-form">
                <h1 className="contact-form-title">Nous contacter</h1>

                <div className="contact-form-section">
                    <label htmlFor="first-name" className="contact-form-label">
                        Prénom
                        <input type="text" id="first-name" className="contact-form-input" />
                    </label>

                    <label htmlFor="last-name" className="contact-form-label">
                        Nom
                        <input type="text" id="last-name" className="contact-form-input" />
                    </label>
                </div>

                <div className="contact-form-section">
                    <label htmlFor="email" className="contact-form-label">
                        Adresse mail
                        <input type="email" id="email" className="contact-form-input" />
                    </label>

                    <label htmlFor="phone-number" className="contact-form-label">
                        Numéro de Téléphone
                        <input type="tel" id="phone-number" className="contact-form-input" />
                    </label>
                </div>

                <div className="contact-form-subject">
                    <label htmlFor="subject" className="contact-form-label">Sujet</label>
                    <input type="text" id="subject" className="contact-form-input" />
                </div>

                <p className="contact-form-description">
                    Votre projet est unique, et nous sommes là pour le réaliser avec vous. Laissez-nous quelques mots sur vos besoins en crépis, travaux de construction ou produits, et nous vous contacterons pour créer une solution sur mesure qui dépasse vos attentes.
                </p>

                <div className="contact-form-message">
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <textarea name="message" id="message" className="contact-form-textarea"></textarea>
                </div>

                <input type="submit" value="Envoyer" className="contact-form-button" />
            </form>

        </main>
    )
}

export default PageContact