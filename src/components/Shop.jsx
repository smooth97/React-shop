import React, { useState } from 'react';
import '../styles/shop.css';
import Data from '../Data';
import Shophead from './Shophead';
import Watch from './Watch';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Section = () => {

    // useState 사용해서 시계 Data 가져와서 Watch 컴포넌트에 적용

    const [watches, setWatches] = useState(Data);

    return (
        <main>
            <section>
                {watches.map(watch => (
                    <Link to={watch.src} style={{ textDecoration: 'none' }} key={watch.id}>
                        <Watch
                            image={watch.image}
                            series={watch.series}
                            connectivity={watch.connectivity}
                            features={watch.features}
                            price={watch.price}
                            size={watch.size}
                            key={watch.id}
                        /></Link>
                ))}
            </section>
        </main>
    );
}

const Shop = () => {

    return (
        <div className="shopContainer">
            <Shophead />
            <Section />
            <Footer />
        </div>
    );
}

export default Shop;