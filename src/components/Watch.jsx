import React from 'react';

const Watch = ({image, series, connectivity, features, price, size, src}) => {
    
    return(
        <div>
            <img src={image} alt=""/>
            <div className="contents">
                <h2>Series {series}</h2>
                <h3>{connectivity}</h3>
                <p>{features}</p>
                <span>${price}</span>
                <h4>{size}</h4>
            </div>
        </div>
    );
};

export default Watch;