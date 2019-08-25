import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import main from '../images/main.png';

const About = () => {

    return (
        <div className="aboutContainer">
            <section className="textBox">
                <div>
                    <h1>A shared vision, <br />seen in a whole new light.</h1>
                    <p>A partnership based on parallel thinking, singular vision, and mutual regard continues with a fresh expression. The latest Apple Watch Hermès collection showcases boldly colorful leather bands and a delightful watch face designed with Apple. It’s the ultimate tool for modern life — now with a dash of sophisticated whimsy.</p>
                    <Link className="a" to="/shop"><span>Learn more about Apple Watch Series 4 ></span></Link>
                </div>
            </section>
            <section className="imgBox"><img src={main} /></section>
        </div>
    );
}

export default About;