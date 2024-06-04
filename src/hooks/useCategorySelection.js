import { useState } from 'react';

const useCategorySelection = () => {
    const [currentSelection, setCurrentSelection] = useState('all');

    const handleCheckboxChange = (category) => {
        // setCurrentSelection((prevSelection) =>
        //     prevSelection.includes(category)
        //         ? prevSelection.filter((item) => item !== category)
        //         : [...prevSelection, category]
        // );

        setCurrentSelection((prev) => (prev === category ? 'all' : category));
    };

    return [currentSelection, handleCheckboxChange];
};

export default useCategorySelection;