import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import cartimg from '../images/cartimg.jpg';
import Data from '../Data';
import { CartContext } from '../CartContext';
import Products from './Products';

const Cart = () => {

    const [items, setItems] = useState(Data);
    //console.log(items);

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    // Cart Style
    const none = {
        display: "none"
    };
    const block = {
        display: "block"
    };

    return (
        <div>

            <div className="cartContainer" style={
                cart.length === 0 ? none : block}>

                <div className="left">
                    <header>
                        <h2>Shoping Cart</h2>
                    </header>
                    <div className="product">
                        <div className="store">
                            <span>PRODUCT DETAILS</span>
                            <span>QUANTITY</span>
                            <span>PRICE</span>
                        </div>
                        {cart.map(i => (
                            <Products
                                image={i.image}
                                features={i.features}
                                price={i.price}
                                quantity={i.quantity}
                                key={i.id}
                                src={i.src}
                            />
                        ))}
                    </div>
                    <footer>
                        <Link to="/shop"><span>Continue Shopping</span></Link>
                    </footer>
                </div>

                <div className="right">
                    <header>
                        <h2>Odder Summary</h2>
                    </header>
                    <div className="menu">
                        <div>
                            <h3>ITEMS</h3>
                            <h3>{cart.length}</h3>
                        </div>
                        <h2>SHIPPING</h2>
                        <input type="text" placeholder="Standard Delivery - $5.00" />
                        <h2>PROMO CODE</h2>
                        <input type="text" placeholder="Enter your code" />
                    </div>
                    <div className="total">
                        <div>
                            <h2>Total</h2>
                            <h3>${totalPrice}</h3>
                        </div>
                        <button>CheckOut</button>
                    </div>
                </div>

            </div>


            <div className="emptyContainer" style={
                cart.length !== 0 ? none : block
            }>
                <h1>Your bag is empty.</h1>
                <div className="imgBox">
                    <img src={cartimg} alt="" />
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
