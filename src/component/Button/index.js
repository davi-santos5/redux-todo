import React from 'react';

const Button = ({action, children}) => {
    return (
        <button onClick={action}>{children}</button>
    )
}

export default Button;