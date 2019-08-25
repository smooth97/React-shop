import React from 'react';
import headerImg from '../images/shop/header.jpg';
import logo from '../images/shop/logo.JPG';


const Shophead = () => {

    return (
        <>
            <header>
                <div className="left"></div>
                <div className="text">
                    <img className="logo" src={logo} alt="logo" />
                    <h1>
                        A shared vision, seen<br />in a whole new light.
                        </h1>
                </div>
                <img src={headerImg} alt="header" />
                <div className="right"></div>
            </header>
        </>
    )
}

export default Shophead;