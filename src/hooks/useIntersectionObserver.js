import { useEffect } from 'react';

/**
 * Un hook personnalisé qui ajoute une classe à un élément cible lorsqu'il entre dans le viewport.
 * 
 * @param {string} targetClass - La classe CSS de l'élément à observer.
 * @param {string} classToAdd - La classe CSS à ajouter à l'élément lorsqu'il est visible.
 */
const useIntersectionObserver = (targetClass, classToAdd) => {
    useEffect(() => {
        // Fonction de callback pour gérer l'intersection
        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Action à effectuer quand l'élément est visible
                    entry.target.classList.add(classToAdd);

                    // Nettoyage de l'observer lors du démontage du composant
                    observer.unobserve(entry.target);
                }
            });
        };

        // Options pour l'IntersectionObserver
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: [0.4, 1.0],
        };

        // Sélection de l'élément cible
        const target = document.querySelector(`.${targetClass}`);

        // Création d'un nouvel IntersectionObserver
        const observer = new IntersectionObserver(handleIntersect, options);

        // Vérification si l'élément cible existe
        if (target) {
            // Observation de l'élément cible
            observer.observe(target);
        }

        // Cleanup function à exécuter lors du démontage du composant
        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [targetClass, classToAdd]); // Dépendances du useEffect
};

export default useIntersectionObserver;
