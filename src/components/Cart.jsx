import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import cart from '../images/cart.jpg';
import Data from '../Data';
import Products from './Products';

const Cart = () => {

    const [items, setItems] = useState(Data);
    console.log(items);

    

    return (
        <div className="cartContainer">
            <Products
                image={items[0].image}
                features={items[0].features}
                price={items[0].price}
                quantity={items[0].quantity}
                key={items[0].id}
            />
           {/* <h1>Your bag is empty.</h1>
           <img  src={cart} alt=""/>
           <div>
            <h2>New Arrivals</h2>
            <p>Check out the latest accessories.</p>
            <Link to="/shop"><button>Go Shop</button></Link>
           </div> */}
        </div>
    );
}

export default Cart;