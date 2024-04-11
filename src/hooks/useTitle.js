import { useEffect } from 'react';

function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        return () => {
            document.title = prevTitle; // Réinitialise le titre lorsque le composant est démonté
        };
    }, [title]);
}

export default useTitle