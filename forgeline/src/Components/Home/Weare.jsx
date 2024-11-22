import React from 'react'
import { ourCard } from '../../Data/home'
import CardWe from './CardWe'
import "./Weare.css"

const Weare = () => {
    return (
        <div className='weare_Container'>
            <div className='weare_text_cont'>
                <p>Who We Are</p>
                <h2>Unapologetically Industrial.</h2>
                <p>We are a full-service marketing agency that brands, modernizes and
                    grows companies in the following industrial sectors:</p>
            </div>

            <div>
                <CardWe ourCard={ourCard} />
            </div>

        </div>

    )
}

export default Weare