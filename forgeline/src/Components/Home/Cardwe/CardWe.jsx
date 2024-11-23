/** @format */

import React from "react";
import { Link } from "react-router-dom";

const CardWe = ({ ourCard }) => {
    return (
        <div className="card_section">
            {
                ourCard.map((data, index) => (
                    <div  className="Original_card" key={index}>
                        <Link className="card_image" to="/">
                            <img loading="lazy" src={data.imageUrl} alt="Not Image" />
                        </Link>

                        <div className="text_card_container">
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>

                            <div className="card_btns">
                                <Link className="card_btn" to="/">SEE MORE</Link>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
};

export default CardWe;
