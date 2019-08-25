import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';
import { CartContext } from '../CartContext';


const Products = ({ image, features, price, src, quantity, id }) => {

    const [cart, setCart] = useContext(CartContext);

    const increse = () => {
        const item = { quantity: quantity + 1 };
        setCart(current => [...current, item]);
    }

    return (
        <div className="productContainer">
            <img src={image} alt="" />
            <div className="content">
                <p>{features}</p>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Products;