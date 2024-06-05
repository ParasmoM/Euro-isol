import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useTitle(name, lang) {
    const location = useLocation();
    const path = location.pathname.split('/').filter(Boolean)[0] || 'home';

    useEffect(() => {
        const prevTitle = document.title;

        const translatedPath = getPathTranslate(lang, path);
        const formattedTitle = `${capitalize(translatedPath)} - ${name}`;

        document.title = formattedTitle;
        console.log(lang, path, name, formattedTitle, translatedPath);

        return () => {
            document.title = prevTitle;
        };
    }, [path, name, lang]);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const getPathTranslate = (lang, path) => {
        const lowerPath = path.toLowerCase();

        if (lang === "fr") {
            switch (lowerPath) {
                case "home":
                    return "accueil";
                case "contact":
                    return "contact";
                case "about":
                    return "à propos";
                case "catalog":
                    return "catalogue";
                case "legal-notice":
                    return "mentions légales";
                case "detail":
                    return "catalogue";
                default:
                    return path;
            }
        }

        if (lang === "nl") {
            switch (lowerPath) {
                case "home":
                    return "home";
                case "contact":
                    return "contact";
                case "about":
                    return "over";
                case "catalog":
                    return "catalogus";
                case "legal-notice":
                    return "wettelijke kennisgeving";
                case "detail":
                    return "catalogus";
                default:
                    return path;
            }
        }

        if (lang === "en") {
            switch (lowerPath) {
                case "home":
                    return "home";
                case "contact":
                    return "contact";
                case "about":
                    return "about";
                case "catalog":
                    return "catalog";
                case "legal-notice":
                    return "legal notice";
                case "detail":
                    return "catalog";
                default:
                    return path;
            }
        }

        return path;
    };
}

export default useTitle;