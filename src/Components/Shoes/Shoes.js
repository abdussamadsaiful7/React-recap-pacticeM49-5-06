import React from 'react';
import { shoes } from '../../Utilities/Calculate';

const Shoes = () => {
    const shoesPrice = 280;
    const shoesQuantity = 24;
     const totalPrice = shoes(shoesPrice, shoesQuantity); 
    return (
        <div>
            <p>Total Shoes Price: {totalPrice}</p>
        </div>
    );
};

export default Shoes;