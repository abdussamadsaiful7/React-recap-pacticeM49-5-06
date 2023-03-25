import React, { useEffect, useState } from 'react';
import Center from '../Center/Center';

const ShopeCenter = () => {
   const [ladyItems, setLadyItems]= useState([]);

   useEffect(()=>{
    fetch('data.json')
    .then(res =>res.json())
    .then(data =>setLadyItems(data))
   },[])
    return (
        <div>
            <div className='mt-10 mb-3 font-bold text-2xl shadow-lg py-5 text-cyan-700 bg-pink-300 mx-10'>
                <h1>Welcome to Practice Storage Shop</h1>
            </div>
            {
                ladyItems.map(item => <Center item={item} key={item.id}></Center>)
            }
        </div>
    );
};

export default ShopeCenter;