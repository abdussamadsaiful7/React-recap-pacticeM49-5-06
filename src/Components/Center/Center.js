import React from 'react';
import './Center.css';

const Center = (props) => {
    console.log(props)
    const {name, price, id, phone, email, address, company}=props.item;
    return (
        <div className='style my-2 shadow-lg bg-slate-600 text-yellow-100 p-4 rounded-md'>
            <h1 className='text-xl font-bold text-pink-400'>Employee: {name}</h1>
            <p>pay for an hour: $ {price}</p>
            <p>It has id: {id}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
            <p>Company: {company}</p>
        </div>
    );
};

export default Center;