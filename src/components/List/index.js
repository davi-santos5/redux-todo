import React from 'react';
import styled from 'styled-components';

const UnorderedList = styled.ul`
    color: #fff;
    font-size: 20px;
    margin-top: 20px;

    li {
        width: 300px;
        word-wrap: break-word;
        margin: 0 auto;
        padding: 20px 20px;
        border-bottom: 1px solid #fff
    }
`


const List = ({list}) => {
    
    return (
        <UnorderedList>
            {list.map(({id, name}) => (
                <li key={id}>
                    {name}
                </li>
            ))}
        </UnorderedList>
    )
}

export default List;