import React, { useState } from 'react'
import Card from './Card';
import "./CardSlider.css"

const CardSlider = (prorps) => {

    let sliderCardData = prorps.sliderCardData;


    const [index, setIndex] = useState(0);

    function nextSlider() {
        if (index + 1 >= sliderCardData.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function preSlider() {
        if (index - 1 < sliderCardData.length) {
            setIndex(sliderCardData.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    console.log(sliderCardData);

    return (
        <div className='service_card_container_slider'>
            <div>
                <Card sliderCardData={sliderCardData[index]} />
            </div>
            <div className='slider_btn_content'>
                <button onClick={preSlider}> &larr;</button>
                <div className='dots'>
                    {
                        sliderCardData.map( (data, dotindex) =>(
                            <span className={`dot ${dotindex === index ? "active_slider" : "" }`}></span>
                        ))
                    }
                </div>
                <button onClick={nextSlider}>  &rarr; </button>
            </div>
        </div>
    )
}

export default CardSlider