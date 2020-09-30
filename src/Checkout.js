import React from 'react';
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {
                    user ?
                        basket?.length === 0 ? (
                            <div>
                                <h2>Your Shopping Basket is empty</h2>
                                <p>You have no items in your basket. You buy one or more items, click "Add to basket" next to the item</p>
                            </div>
                        ) : (
                                <div>
                                    <h2 className="checkout__title">You Shopping Basket: {basket.length}</h2>
                                    {
                                        basket.map(item => (
                                            <CheckoutProduct
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (<h2>Please log in to process purchase</h2>)}

            </div>
            {
                user ?
                    basket.length > 0 && (
                        <div className="checkout__right">
                            <Subtotal />
                        </div>
                    ) : (<h2></h2>)
            }


        </div>
    )
}

export default Checkout
