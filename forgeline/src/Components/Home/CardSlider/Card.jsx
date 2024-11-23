import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../../ReadMoreBtn/ReadMore'

const Card = ({ sliderCardData }) => {


    console.log(sliderCardData)

    return (
        <div className='slider_card_container'>
            <div className='slider_card_txt'>
                <p>Featured Project</p>
                <h3>{sliderCardData.title}</h3>
                <p>{sliderCardData.desc}</p>

                <Link to="/" className='btn_card_slider'>
                    <ReadMore text = "Read Case Study" />
                </Link>

            </div>
            <div className='slider_card_img'>
                <img src={sliderCardData.url} alt={sliderCardData.title} />
            </div>
        </div>
    )
}

export default Card