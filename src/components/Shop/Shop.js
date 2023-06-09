import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, fakeCartDb, localStorageData } from '../../utilities/FakecartDb';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    // const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
   }

    // useEffect( ()=>{

    //     fetch("products.json")
    //     .then(res => res.json())
    //     .then(data => setProducts(data))

    // }, []);

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
        let newCart = [];
        const productHaveToCart = cart.find(selectedProduct => selectedProduct.id === product.id);
        // console.log(productHaveToCart)
        if(!productHaveToCart){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const checkProductToCart = cart.filter( selectedProduct => selectedProduct.id !==product.id);
            productHaveToCart.quantity = productHaveToCart.quantity + 1;

            newCart = [...checkProductToCart, productHaveToCart];

        }

        
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
                <Cart clearCart={clearCart} cart={cart}>
                <Link to="/orders">
                    <button>Review Order</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;