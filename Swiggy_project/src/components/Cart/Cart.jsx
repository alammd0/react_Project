import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

const Cart = ({ openMainNavbar, cartItem }) => {

    console.log(cartItem.length);

    const totalPrice = cartItem.reduce((sum, item) => sum + ((parseInt) (item.price)), 0);


    // cartItem.map(item => console.log(item.url))

    return (
        <div>
            {
                cartItem.length === 0 ? (
                    <div>
                        <div>
                            <h2>Your cart is empty</h2>
                            <p>You can go to home page to view more restaurants</p>
                        </div>

                        <div>
                            <Link to="/" onClick={openMainNavbar}>See restaurants near you</Link>
                        </div>
                    </div>

                ) : (
                    <div>
                        {
                            cartItem.map((item, index) => (
                                <div key={index}>
                                    <div>
                                        <img src={item.url} alt='Not image' />
                                        <p>{item.desc}</p>

                                        <p className='rating_color start_rating'><span><FaStar /></span> {" "} {item.rating} . {item.time} mins</p>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>{item.by}</h2>
                                            <h3>{item.title}</h3>
                                            <p>₹ {item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div>
                            <p>Total Prices : ₹ {totalPrice}</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart