import React, { useState } from 'react';
import Data from '../../Data';
import '../../styles/shops.css';


const Shop02 = () => {

    const title = 'Apple Watch Hermès';

    const [watch, setWatch] = useState(Data[1]);
    
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
                        <h1>{title}</h1>
                        <h2>{watch.features}</h2>
                        <h3>Case Size</h3>
                        <h3>{watch.size}</h3>
                        <h4>Band fits 130–155mm wrists.</h4>
                    </div>
                    <div className="connectivity">
                        <h3>Connectivity</h3>
                        <h3>{watch.connectivity}</h3>
                        <h2>{watch.price}</h2>
                        <button>Add to Cart</button>  
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Shop02;