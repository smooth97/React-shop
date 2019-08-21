import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import cart from '../images/cart.jpg';
//import Distortion from './Distortion';

const Cart = () => {

    return (
        <div className="cartContainer">
           <h1>Your bag is empty.</h1>
           <div className="imgBox">
                <img  src={cart} alt=""></img>
                <div>
                    <h2>New Arrivals</h2>
                    <p>Check out the latest accessories.</p>
                    <Link to="/shop"><button>Go Shop</button></Link>
                </div>
           </div>
        </div>
    );
}

export default Cart;