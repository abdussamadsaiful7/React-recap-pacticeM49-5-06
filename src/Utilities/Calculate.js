const add =(first, second) =>{
return (first+ second);
}

const multiply = (firstOne, secondOne) => firstOne * secondOne;
const shoes =(shoesPrice, shoesQuantity) => shoesPrice * shoesQuantity;


const getTotalPrice = products =>{
    const reducer =(previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    console.log(total)
    return total;
}


export {add, multiply, shoes,  getTotalPrice as getTotal};