import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReview from '../OrdersReview/OrderReview';
import { removeDataDb } from '../../utilities/FakecartDb';

const Orders = () => {
    const {products, myCart} = useLoaderData();
    const [cart, setCart] = useState(myCart);

    const eventHandler = (id)=>{
        const removeItem = cart.filter(product => product.id !==id);
        setCart(removeItem);
        removeDataDb(id);
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
           </div>

           <div className='cart-container'>
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;