import React from 'react';
import { add, getTotal, multiply } from '../../Utilities/Calculate';
import { deleteShoppingCart } from '../../Utilities/Fakedb';

const Cosmetics = () => {
    const first = 555;
    const second =666;
    const total = add (first, second);


    const firstOne = 1000;
    const secondOne = 1000;
    const totalMultiply = multiply(firstOne, secondOne);

    //all remove handler
    const removeAll =()=>{
        deleteShoppingCart([]);
    }

    //reduce method
    // const totalSum = getTotal(Cosmetics);
    // console.log(totalSum);

    return (
        <div>
            <div>
                <p>Total : {total}</p>
                <p>Total Multiply : {totalMultiply}</p>
                <p>Total Product Money: $</p>
            </div>
            <button onClick={()=> removeAll([])} className="bg-blue-600 rounded-md text-white hover:text-blue-600 
             hover:bg-white py-1 px-2 m-2 font-bold" >Remove All From LocalStorage</button>
        </div>
    );
};

export default Cosmetics;