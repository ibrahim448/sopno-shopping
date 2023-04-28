import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { fakeCartDb } from '../../utilities/FakecartDb';

const Shop = () => {
    const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

    useEffect( ()=>{

        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    //EventHandler
    const cartEventHandler = (product)=>{

        const newCart = [...cart,product];
        setCart(newCart);

        fakeCartDb(product.id)
       
    }
   
    return (
        <div className='shop-container'>
            <div className="products-container">
               <div className='products'>
                {
                    products.map(product => <Product key={product.id} product={product} cartEventHandler={cartEventHandler}></Product>)
                }
               </div>


            </div>



            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;