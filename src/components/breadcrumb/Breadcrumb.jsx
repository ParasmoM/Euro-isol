import React from 'react';
import { Link } from 'react-router-dom';
import usePageTrail from '../../hooks/usePageTrail';

const getNameTranslate = (lang, name) => {
    const lowerName = name.toLowerCase();

    if (lang === "fr") {
        if (lowerName === "home") {
            return "accueil";
        }
        if (lowerName === "contact") {
            return "contact";
        }
        if (lowerName === "about") {
            return "à propos";
        }
        if (lowerName === "catalog") {
            return "catalogue";
        }
        if (lowerName === "legal-notice") {
            return "mentions légales";
        }
    }

    if (lang === "nl") {
        if (lowerName === "home") {
            return "home";
        }
        if (lowerName === "contact") {
            return "contact";
        }
        if (lowerName === "about") {
            return "over";
        }
        if (lowerName === "catalog") {
            return "catalogus";
        }
        if (lowerName === "legal-notice") {
            return "wettelijke kennisgeving";
        }
    }

    if (lang === "en") {
        if (lowerName === "home") {
            return "home";
        }
        if (lowerName === "contact") {
            return "contact";
        }
        if (lowerName === "about") {
            return "about";
        }
        if (lowerName === "catalog") {
            return "catalog";
        }
        if (lowerName === "legal-notice") {
            return "legal notice";
        }
    }

    return name;
};

const Breadcrumb = ({ lang, children }) => {
    const trail = usePageTrail();
    const path = trail.slice(0, 1).join('/');

    return (
        <div className="queue-container">
            <Link to={'/home'}>{getNameTranslate(lang, 'home')}</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path>
            </svg>
            {path === "detail" &&
                <>
                    <Link to={'/catalog'}>{getNameTranslate(lang, 'catalog')}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path>
                    </svg>
                </>
            }

            {path !== "detail"
                ? <span>{getNameTranslate(lang, path)}</span>
                : <span>{children}</span>
            }
        </div>
    );
};

export default Breadcrumb;


