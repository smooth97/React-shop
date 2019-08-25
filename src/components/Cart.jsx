import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import cartimg from '../images/cartimg.jpg';
import Data from '../Data';
import { CartContext } from '../CartContext';
import Products from './Products';

const Cart = () => {

    const [items, setItems] = useState(Data);
    console.log(items);

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    
    const none = {
        display: "none"
    }
    const block = {
        display: "block"
    }

    return (
        <div>

            <div className="cartContainer" style={
                cart.length === 0 ? none : block}>  
                <h2>Cart List</h2>
                <div className="product">
                    {cart.map(i => (
                        <Products 
                        image={i.image}
                        features={i.features}
                        price={i.price}
                        quantity={i.quantity}
                    />
                    ))}
                </div>
                <div className="total">
                    <span>Items : {cart.length}</span>
                    <span>tatal : ${totalPrice}</span>
                </div>
            </div>


            <div className="emptyContainer" style={
                cart.length !== 0 ? none : block
            }>
                <h1>Your bag is empty.</h1>
                <div className="imgBox">
                <img  src={cartimg} alt=""/>
                    <div>
                        <h2>New Arrivals</h2>
                        <p>Check out the latest accessories.</p>
                        <Link to="/shop"><button>Go Shop</button></Link>
                    </div>
                </div> 
            </div>

        </div>
    );
}

export default Cart;





/* 
           
    
         <Products
                image={items[0].image}
                features={items[0].features}
                price={items[0].price}
                quantity={items[0].quantity}
                key={items[0].id}
            />
    */