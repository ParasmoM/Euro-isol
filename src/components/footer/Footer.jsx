import React from 'react'
import Copyright from './partials/Copyright'
import { FacebookIcone, InstagramIcone } from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import InfoData from "../../data/infoData.json";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function Footer({ data, lang }) {
    const section = data["footer"][lang];
    const info = data["info"];

    useIntersectionObserver('footer__container', 'fade-in');

    return <div className='footer__container'>
        <section className="footer__section">
            <div className="footer__logo">
                <Link to={'/home'} rel='noopener noreferrer'>
                    <img src={'/logo.svg'} alt="Logo" className='footer__logo-image' />
                    <img src={'/logo-title.svg'} alt="Logo Title" className='footer__logo-title' />
                </Link>
            </div>

            <div className="footer__content">
                <div className="footer__info">
                    <h2 className="heading">{section["info"]["title"]}</h2>
                    <ul className="footer__info-list">
                        {Object.entries(section["info"]["content"]).map((value, index) => (
                            <li key={index} className="footer__info-list-item">
                                <h3 className="footer__info-title">{value[1]}</h3>
                                <p className="footer__info-description">{info[value[0]]}</p>
                            </li>
                        ))}
                        <li className="footer__info-item">
                            <h3 className="footer__info-title">{section["info"]["schedule"]["title"]}</h3>
                            <p className="footer__info-description">{section["info"]["schedule"]["value"]}</p>
                        </li>
                    </ul>
                </div>

                <div className="footer__extras">
                    <div className="footer__utilities">
                        <h2 className="heading">{section["utils"]["title"]}</h2>
                        <ul className="footer__utilities-list">
                            {section["utils"]["content"].map((value, index) => (
                                <li key={index} className="footer__utilities-list-item">
                                    <Link to={value["href"]} rel='noopener noreferrer' className="footer__utilities-link">
                                        {value["title"]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__socials">
                        <Link to="#" className="footer__social-link">
                            <FacebookIcone className="footer__icon" />
                        </Link>
                        <Link to="#" className="footer__social-link">
                            <InstagramIcone className="footer__icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className='footer__copyright'>
            <Copyright name='EURO-ISOL' />
        </section>
    </div>

}

export default Footer