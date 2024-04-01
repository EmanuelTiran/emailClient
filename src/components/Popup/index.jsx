
import './Popup.css';
import React, { useContext } from 'react';
import DataContext from '../../useContext/context';
import { useState } from 'react';

export default function Popup() {
    const { text, open, setOpen } = useContext(DataContext);
    const handleOutsideClick = () => {
        setOpen(!open);
    };

    const handleInsideClick = (e) => {
        e.stopPropagation(); // Prevent event bubbling
    };

    return (
        open && (
            <div className="outside" onClick={handleOutsideClick}>
                click me!!
                <div className="inside" onClick={handleInsideClick}>
                    {text}
                    <div className='btns'>
                        <div className='confirm' onClick={handleOutsideClick}>confirm</div>
                        <div className='cancel' onClick={handleInsideClick}>cancel</div>
                    </div>
                </div>
            </div>
        )
    )
}
