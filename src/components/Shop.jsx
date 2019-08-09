import React from 'react';
import '../styles/shop.css';
import headerImg from '../images/shop/header.jpg';
import logo from '../images/shop/logo.JPG';

const Header = () => {

    return (
        <>
             <header>
                <div className="left"></div>
                    <div className="text">
                        <img className="logo" src={logo} alt="logo"/>
                        <h1> 
                            A shared vision, seen<br/>in a whole new light.
                        </h1>
                    </div>
                    <img src={headerImg} alt="header" />
                <div className="right"></div>
            </header>
        </>
    )
}

const Section = ({image, id}) => {
    
    return (
        <main>
        <section>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
        </section>
        <section>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
        </section>
        <section>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
            <div><img src={image} alt={id}/></div>
        </section>
        </main>
    );
}

const Footer = () => {

    return (
        <footer>            
        </footer>
    )
}

const Shop = () => {

    return (
        <div className="shopContainer">
            <Header/>
            <Section/>
            <Footer/>
        </div> 
    );
}

export default Shop;