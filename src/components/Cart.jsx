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
    //curr.price, 0
    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);

    // Cart Style
    const none = {
        display: "none"
    };
    const block = {
        display: "block"
    };

    //기존에 있는 Product 필터 후 qauntity + 1 함수
    const handleAddFunc = (product) => {
        const existionProduct = cart.filter(p => p.id === product.id);
        
        if (existionProduct.length > 1) {
            //이미 존재하는 Product 삭제
            setCart(cart.filter(p => p.id !== product.id));
            
            //quantity += 1 한 새로운 product 추가
            const item = { features: product.features, price: product.price, quantity: product.quantity, image: product.image, id: product.id };
            setCart(current => [...current, item]);
            return item.quantity++;
            
        }
    }

    //해당하는 Product 삭제
    const onRemove = (product) => {
        setCart(cart.filter(p => p.id !== product.id));
        console.log("dele");
    }
    
    const incre = (product) => {
        console.log("incre");
    }

     const decrease = (product) => {
         const item = { features: watch.features, price: watch.price, quantity: watch.quantity, image: watch.image, id: watch.id };   
         console.log(item)
    }    

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
                                increase={incre}
                                decrease={decrease}
                                onRemove={onRemove(i)}
                                addFunc={() => handleAddFunc(i)}
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
