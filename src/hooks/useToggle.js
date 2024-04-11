import React, { useCallback, useState } from 'react'

function useToggle(initialState = false) {
    const [isToggled, setIsToggled] = useState(initialState);

    // Méthode pour basculer l'état
    const toggle = useCallback(() => setIsToggled(state => !state), []);

    return [isToggled, toggle];
}

export default useToggle