import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    //destucture
   const {cartEventHandler,product} = props;

   const {name, price, ratings, img, category} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufecturer: {category}</p>
                <p>Ratings: {ratings}</p>
           </div>
            <button onClick={()=> cartEventHandler(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} className='icon'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;