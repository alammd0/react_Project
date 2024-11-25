import React from 'react'
import CardWe from '../../Home/Cardwe/CardWe'
import { ourCard } from '../../../Data/home'
import "./Target.css"

export const Target = () => {
    return (
        <div className='weare_Container'>
            <div className='target_txt_heaing weare_text_cont'>
                <h2>Focused and Targeted</h2>
                <p>In order to maintain our expertise, we focus on three main areas:</p>
            </div>

            <div>
                <CardWe ourCard={ourCard}/>
            </div>

        </div>
    )
}
