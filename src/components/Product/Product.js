import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const {img,name,price}=product
 
    return (
        <div className='product-cont'>
            
            <div className='product'>
                <img src={img} alt="" />
                <h2>{name}</h2>
               <h3>Price:${price}</h3>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='cart-button'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </button>
        </div>
    );
};

export default Product;