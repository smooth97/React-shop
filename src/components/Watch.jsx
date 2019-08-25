import React from 'react';

//{image, series, connectivity, features, price, size, src}

const Watch = (props) => {


    return(
        <div>
            <img src={props.image} alt=""/>
            <div className="contents">
                <h2>Series {props.series}</h2>
                <h3>{props.connectivity}</h3>
                <p>{props.features}</p>
                <span>${props.price}</span>
                <h4>{props.size}</h4>
            </div>
        </div>
    );
};

export default Watch;