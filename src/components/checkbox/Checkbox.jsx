import React from 'react';

const Checkbox = ({ category, handleCheckboxChange, isChecked }) => (
    <label>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(category)}
        />
        {category}
    </label>
);

export default React.memo(Checkbox);
