import React from 'react'
import { sliderCardData } from '../../../Data/home'
import ReadMore from '../../ReadMoreBtn/ReadMore'
import "./WorkCard.css"

const WorkCard = () => {
    return (
        <div className="wordCard_Wrapper">
            {
                sliderCardData.map((cardData, index) => (
                    <div className='workCard_card_data' key={index}>
                        <div className='word_Card_txt'>
                            <h2 style={{textTransform : "uppercase"}}>{cardData.title}</h2>
                            <p>{cardData.desc}</p>
                            <ReadMore text = "Read Case Study" />
                        </div>

                        <div className='work_card_image'>
                            <img src={cardData.url} alt={cardData.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default WorkCard