import React from 'react'
import Copyright from './partials/Copyright'
import { FacebookIcone, InstagramIcone } from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import InfoData from "../../data/infoData.json";

function Footer({ data, lang }) {
    const section = data["footer"][lang];
    const info = data["info"];

    return (
        <div className="footer-container">
            <section className="footer-section">
                <div className="footer-logo-container">
                    <Link to={'/home'} rel='noopener noreferrer'>
                        <img src={'/public/logo.svg'} alt="Logo" className='footer-logo' />
                        <img src={'/public/logo-title.svg'} alt="Logo Title" className='footer-logo-title' />
                    </Link>
                </div>

                <div className="footer-info">
                    <div>
                        <h2 className="footer-heading">{section["info"]["title"]}</h2>

                        <ul>
                            {Object.entries(section["info"]["content"]).map((value, index) => (
                                <li key={index}>
                                    <h3>{value[1]}</h3>
                                    <p>{info[value[0]]}</p>
                                </li>
                            ))}

                            <li>
                                <h3>{section["info"]["schedule"]["title"]}</h3>
                                <p>{section["info"]["schedule"]["value"]}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-utils">
                    <div>
                        <h2 className="footer-heading">{section["utils"]["title"]}</h2>

                        <ul>
                            {section["utils"]["content"].map((value, index) => (
                                <li>
                                    <Link
                                        to={value["href"]}
                                        key={index}
                                        rel='noopener noreferrer'
                                    >
                                        {value["title"]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-socials">
                    <Link >
                        <FacebookIcone className="footer-icon" />
                    </Link>

                    <Link >
                        <InstagramIcone className="footer-icon" />
                    </Link>
                </div>
            </section>

            <section className='footer-copyright'>
                <Copyright name='EURO-ISOL' />
            </section>
        </div>
    )
}

export default Footer