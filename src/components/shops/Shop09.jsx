import React, { useState, useContext } from 'react';
import Data from '../../Data';
import '../../styles/shops.css';
import { CartContext } from '../../CartContext';


const Shop09 = () => {

    const title = 'Apple Watch Hermès';

    const [watch, setWatch] = useState(Data[8]);
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const item = {features: watch.features, price: watch.price, quantity: watch.quantity};
        setCart(current => [...current, item]);
    }
    
    return (
        <div className="watchContainer">
            <header>
                <h1>{title}</h1>
            </header>
            <section>
                <div className="imgBox">
                    <img src={watch.image} alt=""/>
                </div>
                <div className="order">
                    <div className="spec">
                        <div className="title">
                            <h1>{title}</h1>
                            <h2>{watch.features}</h2>
                        </div>
                        <div className="case">
                            <h2>Case Size</h2>
                            <h3>{watch.size}</h3>
                            <p>Band fits 165–200mm wrists.</p>
                        </div>
                    </div>
                    <div className="connectivity">
                        <h3>Connectivity</h3>
                        <h3>{watch.connectivity}</h3>
                        <h2>${watch.price}</h2>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Shop09;