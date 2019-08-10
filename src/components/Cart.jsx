import React from 'react';
import '../styles/cart.css';
import cart from '../images/cart.jpg';
//import Distortion from './Distortion';

const Cart = () => {

    return (
        <div className="cartContainer">
           <h1>Your bag is empty.</h1>
           <img  src={cart} alt=""/>
           <h2>New Arrivals</h2>
           <p>Check out the latest accessories.</p>
        </div>
    );
}

export default Cart;