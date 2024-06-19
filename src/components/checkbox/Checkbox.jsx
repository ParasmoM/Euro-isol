import React from 'react';

const getName = (lang, children) => {
    if (lang === "fr") {
        if (children === "Adhesives") {
            return "Adhésifs";
        }
        if (children === "plasters") {
            return "Enduits";
        }
        if (children === "insulations") {
            return "Isolants";
        }
        if (children === "reinforcement") {
            return "Renforts";
        }
        if (children === "paints") {
            return "Peintures";
        }
        if (children === "primers") {
            return "Primaires";
        }
        if (children === "finishing") {
            return "Profils de finition";
        }
    }
    if (lang === "nl") {
        if (children === "Adhesives") {
            return "Lijmen";
        }
        if (children === "plasters") {
            return "Pleisters";
        }
        if (children === "insulations") {
            return "Isolatie";
        }
        if (children === "reinforcement") {
            return "Versterkingsmaterialen";
        }
        if (children === "paints") {
            return "Verf";
        }
        if (children === "primers") {
            return "Primers";
        }
        if (children === "finishing") {
            return "Afwerkingsprofielen";
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
