import React from 'react'
import { Link } from 'react-router-dom'
import dataBase from "../../../data/infoData"

function ContactInformation({ data, lang }) {
    const info = dataBase["info"];

    return (
        <div className="contact-information-container">
            <div className="contact-information-content">
                <div className="contact-header">
                    <h1 className="contact-title">{data[lang]["sectionTitle"]}</h1>

                    <div className="contact-details">
                        <div className="contact-details-section">
                            <div className="opening-hours">
                                <h2 className="section-heading">{data[lang]["openingHoursTitle"]}</h2>
                                <p className="section-content">{data[lang]["openingHoursContent"]}</p>
                            </div>
                            <div className="services-offered">
                                <h2 className="section-heading">{data[lang]["servicesTitle"]}</h2>
                                <p className="section-content">{data[lang]["servicesContent"]}</p>
                            </div>
                        </div>

                        <div className="office-contact">
                            <h2 className="section-heading">{data[lang]["contactTitle"]}</h2>
                            <div className="contact-info">
                                <div>
                                    <span className="icon-location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"></path></svg>
                                    </span>
                                    <p className="address">{info["address"]}</p>
                                </div>
                                <div>
                                    <span className="icon-phone">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 18.5h10v-13H7z"></path></svg>
                                    </span>
                                    <p className="phone-number">{info["phone"]}</p>
                                </div>
                                <div>
                                    <span className="icon-email">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"></path></svg>
                                    </span>
                                    <p className="email">{info["email"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1104.6481028990022!2d5.185105687833245!3d50.541955428307624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1a8403ea117db%3A0x7cad58768c280a51!2sRue%20du%20Tilleul%20254%2C%204520%20Wanze!5e0!3m2!1sfr!2sbe!4v1717265427288!5m2!1sfr!2sbe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <Link to="/contact" className="contact-link">{data[lang]["contactButton"]}</Link>
        </div>
    )
}

export default ContactInformation

