import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';
import Data from '../Data';
import { CartContext } from '../CartContext';


const Products = ({ image, features, price, src, quantity, id, decrease, increase, onRemove, addFunc}) => {

    const [watch, setWatch] = useState(Data);
    const [items, setItems] = useState(Data);
    const [cart, setCart] = useContext(CartContext);

    // const increse = () => {
    //     const item = { quantity: quantity + 1 };
    //     setCart(current => [...current, item]);
    // }

    return (
        <div className="productContainer">
            <img src={image} alt="" />
            <div className="content">
                <p>{features}</p>
                <div>
                    <button onClick={increase}>+</button>
                    <span>{quantity}</span>
                    <button onClick={decrease}>-</button>
                </div>
                <h2>${price}</h2>
            </div>
            <button onClick={onRemove}>x</button>
        </div>
    );
};

export default Products;