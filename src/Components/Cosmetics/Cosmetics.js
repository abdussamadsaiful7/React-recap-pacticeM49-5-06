import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Cosmetics = () => {
    const first = 555;
    const second =666;
    const total = add (first, second);


    const firstOne = 1000;
    const secondOne = 1000;
    const totalMultiply = multiply(firstOne, secondOne);

    return (
        <div>
            <div>
                <p>Total : {total}</p>
                <p>Total Multiply : {totalMultiply}</p>
            </div>
        </div>
    );
};

export default Cosmetics;