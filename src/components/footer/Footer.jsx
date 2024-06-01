import React from 'react'
import Copyright from './partials/Copyright'
import { FacebookIcone, InstagramIcone } from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import InfoData from "../../data/infoData.json";

function Footer({ data }) {

    return (
        <footer className="footer">
            <div className="footer-container">
                <section className="footer-section">
                    <div className="footer-logo-container">
                        <Link to='/home' rel='noopener noreferrer' className="footer-logo-link">
                            <img src={'/public/logo.svg'} alt="Logo" className='footer-logo' />
                            <img src={'/public/logo-title.svg'} alt="Logo Title" className='footer-logo-title' />
                        </Link>
                    </div>
                    <div className="footer-office">
                        <h2 className="footer-heading">BUREAU</h2>
                        <p className="footer-address">104 Rue des Saules, 4500 Tihange</p>
                    </div>
                    <div className="footer-info">
                        <h2 className="footer-heading">INFOS</h2>
                        <Link to="/contact" className="footer-link">Nous contacter</Link>
                        <Link to="" className="footer-link">Politique de confidentialité</Link>
                        <Link to="" className="footer-link">Mentions légales</Link>
                    </div>
                    <div className="footer-social">
                        <FacebookIcone className="footer-icon" />
                        <InstagramIcone className="footer-icon" />
                    </div>
                </section>
                <section className='footer-copyright'>
                    <Copyright name='EURO-ISOL' />
                </section>
            </div>
        </footer>
    )
}

export default Footer