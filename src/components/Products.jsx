import React, {useContext} from 'react';
import '../styles/product.css';
import { CartContext } from '../CartContext';


const Products = ({image, features, price, src, quantity}) => {

    const [cart, setCart] = useContext(CartContext);

    const increse = () => {
        const item = {quantity: quantity + 1};
        setCart(current => [...current, item]);
    }

    return(
        <div className="productContainer">
            <img src={image} alt=""/>
            <div className="content">
                <p>{features}</p>
                <h2>Price : ${price}</h2>    
            </div>
        </div>
    );
};

export default Products;