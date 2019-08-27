import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import cartimg from '../images/cartimg.jpg';
import Data from '../Data';
import { CartContext } from '../CartContext';
import Products from './Products';

const Cart = () => {

    const [watch, setWatch] = useState(Data);
    const [items, setItems] = useState(Data);

    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    // Cart Style
    const none = {
        display: "none"
    };
    const block = {
        display: "block"
    };
    console.log(items[0])
    const handleAddFunc = (product) => {
        const existionProduct = cart.filter(p => p.id === product.id);
        if (existionProduct.length > 1) {
            //setCart(cart.filter(p => p.id !== product.id));
            console.log("handle");
            //product.quantity += 1;

            // const update = {
            //     ...existionProduct[0],
            //     quantity: existionProduct[0].quantity + product.quantity
            // }
        }
    }
    //state.filter(todo => todo.id !== action.id);

    const onRemove = (product) => {
        setCart(cart.filter(p => p.id !== product.id));
        console.log("dele");
    }
    
     const addToCart = (product) => {
         //const item = { features: watch.features, price: watch.price, quantity: watch.quantity, image: watch.image, id: watch.id };
         setCart(current => [...current]);
     }

     

    // const decrease = () => {
    //     const item = { features: watch.features, price: watch.price, quantity: watch.quantity, image: watch.image, id: watch.id };   
    //     console.log(item)
    // } 

    // const item = { features: watch.features, price: watch.price, quantity: watch.quantity, image: watch.image, id: watch.id };
    // cart.filter(i => i.id !== item.id);
    

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
                                onRemove={() => (onRemove(i))}
                                addFunc={handleAddFunc(i)}
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
