import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
`

const Input = ({value, onChange}) => {
    return (
        <InputText type='text' value={value} onChange={(e) => onChange(e)} />
    )
}

export default Input;