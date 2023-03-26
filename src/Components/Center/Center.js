import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/Fakedb';
import './Center.css';

const Center = (props) => {

    //add button function
    const addToCart =(id) =>{
        addToDb(id);
    }

    //remove button function
    const  removeFromCart =id => {
        removeFromDb(id);
    }

    //console.log(props)
    const {name, price, id, phone, email, address, company}=props.item;
    return (
        <div className='style my-2 shadow-lg bg-slate-700 text-yellow-100 p-4 rounded-md'>
            <h1 className='text-xl font-bold text-pink-400'>Employee: {name}</h1>
            <p>Pay for a Day: <span className='text-white font-bold'> $ {price}</span></p>
            <p>It has id: {id}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
            <p>Company: {company}</p>
            <button onClick={()=>addToCart(id)} className="bg-blue-600 rounded-md text-white hover:text-blue-600 
             hover:bg-white py-1 px-2 m-2 font-bold">Add to Cart</button>
            <button onClick={()=>removeFromCart(id)} className="bg-blue-600 rounded-md text-white hover:text-blue-600 
             hover:bg-white py-1 px-2 m-2 font-bold">Remove</button>
        </div>
    );
};

export default Center;