import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div className='nav-menu'>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/review">Review</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;