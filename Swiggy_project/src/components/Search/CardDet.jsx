import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

const CardDet = ({ by, rating, time, title, price, url, desc }) => {
    console.log(by);


    return (
        <div>
            <div className='foodDetails_card'>
                <div className='foodDetails_card_upper'>
                    <div className='foodDetails_card_text'>
                        <p className='heading'>{by} <span className='icon_next'><GrFormNextLink /></span> </p>
                        <p className='rating_color start_rating'><span><FaStar /></span> {" "} {rating} . {time} mins</p>
                    </div>
                </div>

                <div className='foodDetails_card_buttom'>
                    <div className='foodDetails_card_button_title'>
                        <h2>{title}</h2>
                        <p className='prices_btn'>₹ <span>{price}</span></p>
                    </div>

                    <div className='foodDetails_card_buttom_img'>
                        <img src={url} alt={title} />
                        <button className='add_btn_img'>ADD</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardDet;
