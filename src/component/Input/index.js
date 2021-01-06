import React from 'react';

const Input = ({value, onChange}) => {
    return (
        <input type='text' value={value} onChange={(e) => onChange(e)} />
    )
}

export default Input;