import React from 'react';
import './index.css';

export default function (props) {
    return (
        <div className='field'>
            <label>{props.label}</label>
            <input
                type={props.type}
                onChange={props.onChange}
            />
            <span>{props.error}</span>
        </div>
    )
}
