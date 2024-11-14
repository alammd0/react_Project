import React from 'react';
import { CiStar } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";

const CardDet = ({ by, rating, time, title, price, url }) => {
    console.log(by);

    return (
        <div className='foodDetails_card'>
            <div className='foodDetails_card_upper'>
                <div className='foodDetails_card_text'>
                    <p className='heading'>{by} <span className='icon_next'><GrFormNextLink /></span> </p>
                    <p className='rating rating_color'><span><CiStar /></span>{rating} . {time} mins</p>
                </div>
            </div>

            <div className='foodDetails_card_buttom'>
                <div className='foodDetails_card_button_title'>
                    <h2>{title}</h2>
                    <p className='prices_btn'>₹ <span>{price}</span></p>
                    <button className='more_btn_card'>More Details</button>
                </div>

                <div className='foodDetails_card_buttom_img'>
                    <img src={url} alt={title} />
                    <button className='add_btn_img'>ADD</button>
                </div>
            </div>
        </div>
    );
};

export default CardDet;
