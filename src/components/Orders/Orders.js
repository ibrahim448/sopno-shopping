import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReview from '../OrdersReview/OrderReview';
import { deleteShoppingCart, removeDataDb } from '../../utilities/FakecartDb';

const Orders = () => {
    const {products, myCart} = useLoaderData();
    const [cart, setCart] = useState(myCart);

    const eventHandler = (id)=>{
        const removeItem = cart.filter(product => product.id !==id);
        setCart(removeItem);
        removeDataDb(id);
    }

    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
   }


    return (
        <div className='shop-container'>
           <div className='products-container'>
                {
                    cart.map(product => <OrderReview
                        key={product.key}
                        product={product}
                        eventHandler={eventHandler}
                    ></OrderReview>)
                }
                {
                    cart.length === 0 && <h1>No more Product please <Link to="/shop">Shop</Link> </h1>
                }
           </div>

           <div className='cart-container'>
            <Cart clearCart={clearCart} cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;