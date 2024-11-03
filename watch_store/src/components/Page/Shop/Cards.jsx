import React from 'react'
import Card from './Card'

const Cards = (props) => {

    const cardsData = props.ShoppingCart;

    console.log(cardsData);

    return (
        <div>
            <div className='shop_card_wrapper'>
                {
                    cardsData.map((cardData, index) => (
                        <div key={index} className='shop_card_section'>
                            <Card
                                cardData={cardData}
                            />
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default Cards