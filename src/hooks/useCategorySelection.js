import { useState } from 'react';

const useCategorySelection = () => {
    const [currentSelection, setCurrentSelection] = useState('all');

    const handleCheckboxChange = (category) => {

        setCurrentSelection((prev) => (prev === category ? 'all' : category));
        
    };

    return [currentSelection, handleCheckboxChange];
};

export default useCategorySelection;