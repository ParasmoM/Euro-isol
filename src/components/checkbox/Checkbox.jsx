import React from 'react';

const getName = (lang, children) => {
    if (lang === "fr") {
        return children;
    }
    if (lang === "nl") {
        if (children === "crepis") {
            return "pleisterwerk";
        }
        if (children === "colles") {
            return "lijmen";
        }
        if (children === "isolations") {
            return "isolaties";
        }
    }
    if (lang === "en") {
        if (children === "crepis") {
            return "plasters";
        }
        if (children === "colles") {
            return "adhesives";
        }
        if (children === "isolations") {
            return "insulations";
        }
    }
    return children;
};

const Checkbox = ({ id, handleCheckboxChange, isChecked, lang, category }) => ( 
    <div className="checkbox-wrapper-42">
        <input
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(category)}
        />
        <label className="cbx" htmlFor={id}></label>
        <label className="lbl" htmlFor={id}>{getName(lang, category)}</label>
    </div>   
);

export default React.memo(Checkbox);
