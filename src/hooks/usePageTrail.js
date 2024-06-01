import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageTrail() {
    const [trail, setTrail] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const pathnames = location.pathname.split('/').filter(x => x);
        setTrail(pathnames);
    }, [location]);

    return trail;
}