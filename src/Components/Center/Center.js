import React from 'react';

const Center = (props) => {
    const {name, price, id}=props.item;
    return (
        <div>
            <h1 className='text-xl font-bold'>Buy this: {name}</h1>
            <p>Only for: $ {price}</p>
            <p>It has id: {id}</p>
        </div>
    );
};

export default Center;