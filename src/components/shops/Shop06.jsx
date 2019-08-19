import React, { useState } from 'react';
import Data from '../../Data';
import '../../styles/shops.css';


const Shop06 = () => {

    const title = 'Apple Watch Hermès';

    const [watch, setWatch] = useState(Data[5]);
    
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
                            <p>Band fits 140–175mm wrists.</p>
                        </div>
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

export default Shop06;