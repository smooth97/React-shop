import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Nav = () => {

    return (
        <nav>
            <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>

            <ul className="nav-links">
                <Link className="a" to="/"><li>About</li></Link>
                <Link className="a" to="/shop"><li>Shop</li></Link>
                <Link className="a" to="/cart"><li>Cart</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;