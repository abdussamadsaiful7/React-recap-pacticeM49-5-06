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
           
            <div className='grid grid-cols-3 gap-5 mx-10'>
                {
                    ladyItems.map(item => <Center item={item} key={item.id}></Center>)
                }
            </div>
        </div>
    );
};

export default ShopeCenter;