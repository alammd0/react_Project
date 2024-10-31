import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import "./Card.css"

const Card = (props) => {


    const reviewer = props.reviewer;


    return (
        <>
            <div className='card'>
                <div className='card_info'>
                    <div className='image'>
                        <div className='border'></div>
                        <img src={reviewer.imageUrl} alt={reviewer.name} />
                    </div>

                    <div className='card_info_pern'>
                        <h3>{reviewer.name}</h3>
                        <h5>{reviewer.title}</h5>
                        <p>{reviewer.location}</p>
                    </div>


                    <div>
                        <FaQuoteLeft />
                    </div>

                    <div>
                        {reviewer.testimonial}
                    </div>

                    <div>
                        <FaQuoteRight />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card