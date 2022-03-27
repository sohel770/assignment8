import React from 'react';
import './DisplayProduct.css'

const DisplayProduct = ({order}) => {
    const{img,name,price} =order
console.log(order.name)
    return (
        <div className='displayShow'>
             <h4> <img src={img} alt="" />   {name} ${price}</h4>
        </div>
    );
};

export default DisplayProduct;