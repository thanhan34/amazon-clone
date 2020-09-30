import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={3}
                />
                <Product
                    id="1233213"
                    title="Samsung 65 QLED UHD 8K Smart TV QA65Q800TAWXXY"
                    image="https://images-na.ssl-images-amazon.com/images/I/61Ji29sr2KL._AC_SL1198_.jpg"
                    price={4299.00}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123131"
                    title="Garmin vivoactive 4S, Smaller-Sized GPS Smartwatch"
                    image="https://images-na.ssl-images-amazon.com/images/I/51r2LCE3FLL._AC_SL1000_.jpg"
                    price={485.00}
                    rating={4}
                />
                <Product
                    id="212321"
                    title="ONIKUMA Gaming Headset - Stereo K8 Gaming Headset for PS4 Xbox One"
                    image="https://images-na.ssl-images-amazon.com/images/I/71DFQdWcOOL._AC_SL1500_.jpg"
                    price={45.99}
                    rating={3}
                />
                <Product
                    id="432332"
                    title="Wireless Earbuds, TaoTronics Bluetooth Headphones Smart AI"
                    image="https://images-na.ssl-images-amazon.com/images/I/717fORr2gdL._AC_SL1500_.jpg"
                    price={99.00}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="3243"
                    title="Bose QuietComfort 35 (Series II) Wireless Bluetooth Headphones, Noise Cancelling, Black"
                    image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
                    price={329.00}
                    rating={5}
                />
            </div>

        </div>
    )
}

export default Home
