import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { fakeCartDb, localStorageData } from '../../utilities/FakecartDb';

const Shop = () => {
    const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

    useEffect( ()=>{

        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    //laocal storage data load

    useEffect( ()=>{
        const loadLocalStorageData = localStorageData();
        const productAddToCart = [];  
        // console.log(loadLocalStorageData)  ////////object pabo jekhane cart a add kora id thakbe
        for(const id in loadLocalStorageData){
            // console.log(id) /////// cart a add kora sokol id pabo
            const findProductById = products.find(product => product.id === id);
            // console.log(findProductById)  ///// add kora id diye product pabo
            if(findProductById){
                const quantity = loadLocalStorageData[id];
                // console.log(quantity);
                findProductById.quantity = quantity;
                // console.log(findProductById)   /// product pabo and tar quantity pabo
                productAddToCart.push(findProductById);
                // console.log(productAddToCart)
            }
        }

        setCart(productAddToCart);

    }, [products])

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