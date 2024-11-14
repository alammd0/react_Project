import React from 'react'
import { CiStar } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";

const CardDet = ({ by, rating, time, title, price, url }) => {

    console.log(by);

    return (

        <div>
            <div>
                <div className='foodDetails_card'>

                    <div className='foodDetails_card_upper'>
                        <div className='foodDetails_card_text'>
                            <p>{by}</p>
                            <p><CiStar /><span>{rating} . {time} mins</span></p>
                        </div>

                        <div>
                            <GrFormNextLink />
                        </div>
                    </div>

                    <div className='foodDetails_card_buttom'>
                        <div>
                            <div></div>
                            <div>
                                <h2>{title}</h2>
                                <p><FaRupeeSign /> <span>{price}</span></p>
                            </div>
                            <button>More Details</button>
                        </div>

                        <div className='foodDetails_card_buttom_img'>
                            <img src={url} alt={title} />
                            <button>ADD</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default CardDet