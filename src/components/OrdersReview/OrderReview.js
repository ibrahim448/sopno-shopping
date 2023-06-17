import React from 'react';
import "./OrderReview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const OrderReview = ({product,eventHandler}) => {
    const {id, name, price, quantity, img, shipping} = product;
    return (
        <div className='review-item'>
           <div>
            <img src={img} alt="" />
           </div>
           <div className='review-details'>
                <div className='details'>
                    <h5>{name}</h5>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping Charge: {shipping}</p>
                </div>
                <div className='btn-button'>
                    <button onClick={()=> eventHandler(id)}>
                        <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default OrderReview;