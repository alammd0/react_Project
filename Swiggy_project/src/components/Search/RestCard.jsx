/** @format */

import React from "react";
import { FaStar } from "react-icons/fa6";

const RestCard = ({ title, url, company, price, rating, off, offrupya }) => {
    return (
        <div className="resturent_content_container">
            <div className="restaurent_container_img">
                <img src={url} alt={title} />
                <div className="off_text">
                    <p>₹{off} off</p>
                    <p>upto ₹{offrupya}</p>
                </div>
            </div>

            <div className="restaurent_content_text">
                <p className="rest_title">{title}</p>
                <p className="start_rating">
                    <FaStar />{" "}
                    <span>
                        {rating} . ₹ {price} for two
                    </span>{" "}
                </p>
                <p className="company">{company}</p>
            </div>
        </div>
    );
};

export default RestCard;
