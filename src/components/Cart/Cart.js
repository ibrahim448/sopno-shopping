import React from 'react';
import "./Cart.css";

const Cart = (props) => {
  const {cart} = props;

  let price = 0;
  let shipping = 0;

  for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
  };

  const tax = parseFloat(price * 0.1);
  const grandPrice = (price + shipping + tax).toFixed(2);
   
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
           <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h2>Grand Total: ${grandPrice}</h2>
           </div>
        </div>
    );
};

export default Cart;