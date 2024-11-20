import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import "./Cart.css"
import { RxCross1 } from "react-icons/rx";

const Cart = ({ openMainNavbar, cartItem, removeCartItem, clear }) => {

    console.log(cartItem.length);

    const totalPrice = cartItem.reduce((sum, item) => sum + ((parseInt)(item.price)), 0);


    // cartItem.map(item => console.log(item.url))

    return (
        <div className='cart_wrapper'>
            {
                cartItem.length === 0 ? (
                    <div className='cart_empty_wrapper'>

                        <div>
                            <h2>Your cart is empty</h2>
                            <p>You can go to home page to view more restaurants</p>
                        </div>

                        <div>
                            <Link className='empty_btn' to="/" onClick={openMainNavbar}>See restaurants near you</Link>
                        </div>

                    </div>

                ) : (
                    <div className='item_container'>

                        <div>
                            {
                                cartItem.map((item, index) => (
                                    <div key={index} className='card_item_cart'>
                                        <div>
                                            <div className='image_Container_cart'>
                                                <img src={item.url} alt='Not image' />
                                                <p>{item.desc}</p>
                                                <p className='rating_color start_rating'><span><FaStar /></span> {" "} {item.rating} . {item.time} mins</p>
                                            </div>
                                            <div className='text_container_cart'>
                                                <h2>{item.by}</h2>
                                                <h3>{item.title}</h3>
                                                <p>₹ {item.price}</p>
                                            </div>
                                        </div>

                                        <div className='close_btn'>
                                            <button onClick={() => removeCartItem(item.id)}><RxCross1 /></button>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>

                        <div className='price_card_card'>
                            <p>Total Prices : {totalPrice}</p>
                            <div className='cart_btn_section'>
                                <button>Order Now</button>
                                <button onClick={clear}>Clear</button>
                            </div>

                        </div>

                    </div>
                )
            }
        </div >
    )
}

export default Cart