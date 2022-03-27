import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img,name,price}=product
 console.log(product);
    return (
        <div className='product-cont'>
            
            <div className='product'>
                <img src={img} alt="" />
                <h3>{name}</h3>
               <h3>Price:${price}</h3>
            </div>
            <button className='cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;