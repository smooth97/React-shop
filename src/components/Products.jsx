import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/product.css';
import { increment,decrement } from '../actions';

const Products = ({image, features, price, src, quantity}) => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incre = () => {
        dispatch(increment());
    }

    const decre = () => {
        dispatch(decrement());
    }

    return(
        <div className="productContainer">
            <p>Counter {counter}</p>
            <img src={image} alt=""/>
            <div className="content">
                <p>{features}</p>
                <h2>Price : ${price}</h2>
                <input type="text" value={counter}/>
                
                    <button onClick={incre}>+</button>
                    <button onClick={decre}>-</button>
                
            </div>
        </div>
    );
};

export default Products;