import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();


    // make sure the arrow function inside useEffect() only gets call one time when Dropdown component is rendered, because we just wanted to add the eventlistener to html body one time
    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
                // if clicked element is contained inside ref element, return and not call setOpen(false), if not contained, that means clicked somewhere outside, so call setOpen(false) and close the dropdown
            }
            setOpen(false);
        }, {capture: true});
    }, []);

    const renderedOptions = options.map((option) => {
        // if a color is selected, don't show it on the list of options
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;