import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <Link className="a" to="/"><h3>Logo</h3></Link>
            <ul className="nav-links">
                <Link className="a" to="/"><li>About</li></Link>
                <Link className="a" to="/shop"><li>Shop</li></Link>
                <Link className="a" to="/cart"><li>Cart</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;