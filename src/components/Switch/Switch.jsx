import React from 'react'
import './Switch.css';

const Switch = () => {
    return (
        <div className='btn-container'>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
        </div>
    );
}

export default Switch;