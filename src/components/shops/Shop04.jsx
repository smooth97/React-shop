import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Data';
import '../../styles/shops.css';
import { CartContext } from '../../CartContext';


const Shop04 = () => {

    const title = 'Apple Watch Hermès';

    const [watch, setWatch] = useState(Data[3]);
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const item = { features: watch.features, price: watch.price, quantity: watch.quantity, image: watch.image, id: watch.id };
        setCart(current => [...current, item]);
    }

    return (
        <div className="watchContainer">
            <header>
                <h1>{title}</h1>
            </header>
            <section>
                <div className="imgBox">
                    <img src={watch.image} alt="" />
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
                            <p>Band fits 130–155mm wrists.</p>
                        </div>
                    </div>
                    <div className="connectivity">
                        <h3>Connectivity</h3>
                        <h3>{watch.connectivity}</h3>
                        <h2>${watch.price}</h2>
                        <button onClick={addToCart}>Add to Cart</button>
                        <div className="icon">
                            <Link to="/cart"><svg className="cartSvg" fill="rgb(243, 124, 73)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z" /></svg></Link>
                            <span>{cart.length === 0 ? "0" : cart.length}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Shop04;