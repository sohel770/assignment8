import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

const [products, setproducts]=useState([])
const [cart, setcart] = useState([])
const [count, setcount]= useState(0)

useEffect(() => {
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setproducts(data))
},[])

const handleAddToCart=(product)=>{
    // console.log(product);
    const newCart =[...cart,product]
    if(cart.length>=4){
        setcount(0);
    }
    else{
        setcart(newCart);
    }
}


    return (
        
        <div className='shop-container'>

           <div className="product-container">
            
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    > </Product>)
                }
           </div>


           <div className="cart-container">
            <h3>Order Summary</h3>
            <Order
            cart={cart}
            setcart={setcart}
            ></Order>
           </div>


        </div>
    );
};

export default Shop;