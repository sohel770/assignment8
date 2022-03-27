import React from 'react';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Order.css'

const Order = ({cart,setcart}) => {
    // console.log(cart)
    const randomProduct=cart[Math.floor(Math.random()*cart.length)];
    console.log(randomProduct)

    const chooseOne = ()=>{
        setcart([randomProduct])
    }
    const chooseAgain=()=>{
        setcart([]);
    }

    return (
        <div>
            {
                cart.map(order =>
                    <DisplayProduct
                    key={order.id}
                    order={order}
                    
                    ></DisplayProduct>
                    
                    
                    )

            }


            <button onClick={chooseOne} className='choose-one'>Choose one</button> 
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>
        </div>
    );
};

export default Order;