import React from 'react'
import Card from './Card'
import "./Card.css"

const HomeCards = (props) => {

    const homeCards = props.homeCards;

    return (
        <div className='card_section'>
            {
                homeCards.map( (homeCard, index) => (
                    <div key={index} className='cards_home_section'>
                        <Card 
                            homeCard = {homeCard}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default HomeCards