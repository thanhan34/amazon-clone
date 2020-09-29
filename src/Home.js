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
                    rating={5}
                />
                <Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={5}
                /><Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={5}
                /><Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123131"
                    title="Garmin 010-01614-00 Forerunner 735XT, Black/Gray"
                    image="https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg"
                    price={299.00}
                    rating={5}
                />
            </div>

        </div>
    )
}

export default Home
