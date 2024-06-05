import React from 'react';

const getName = (lang, children) => {
    if(lang === "fr") {
        return children;
    }
    if(lang === "nl") {
        if(children === "crepis") {
            return "pleisterwerk";
        }
        if(children === "colles") {
            return "lijmen";
        }
        if(children === "isolations") {
            return "isolaties";
        }
    }
    if(lang === "en") {
        if(children === "crepis") {
            return "plasters";
        }
        if(children === "colles") {
            return "adhesives";
        }
        if(children === "isolations") {
            return "insulations";
        }
    }
    return children; // fallback in case none of the conditions match
};

const Checkbox = ({ handleCheckboxChange, isChecked, lang, category }) => (    
    <label>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(category)}
        />
        {getName(lang, category)}
    </label>
);

export default React.memo(Checkbox);
