import React from 'react';

const List = ({list}) => {
    
    return (
        <ul>
            {list.map(({id, name}) => (
                <li key={id}>
                    {name}
                </li>
            ))}
        </ul>
    )
}

export default List;