import React from 'react';
import "./Cart.css";

const Cart = () => {
  
   

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
           <div className='cart-info'>
                <p>Selected Items: </p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h2>Grand Total: $</h2>
           </div>
        </div>
    );
};

export default Cart;