import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Card.css"

const Card = (props) => {
    const { homeCard } = props;
    const [ishover, setisHovered] = useState(false);

    // const handleCardClick = () => {
    //     setIsDetailVisible(!isDetailVisible);
    // };

    return (
        <div className='card_wrapper'
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
        >
            <div className='imgs'>
                <img src={homeCard.img} alt='Not available'  />
            </div>

            <div>
                {!ishover && (
                    <div>
                        <h1>{homeCard.title}</h1>
                        <p>{homeCard.price}</p>
                    </div>
                )}

                {ishover && (
                    <button className="view_detail_button"><NavLink className="view_det_btn" to={homeCard.path}>View Detail</NavLink></button>
                )}
            </div>


        </div>
    );
};

export default Card;

