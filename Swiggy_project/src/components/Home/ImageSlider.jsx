import React, { useContext } from 'react'
import { mindData } from '../../Data/data';
import { functionProviderSwiggy } from '../Context/SwiggyContext';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr"

const ImageSlider = () => {

    const { scrollLeft, scrollRight, carouselRef } = useContext(functionProviderSwiggy);

    return (
        <div className="food-carousel">
            <div className='heading_scroll'>
                <div> <h2>What's on your mind?</h2></div>
                <div className='res_btn'>
                    <button className='arrow' onClick={scrollLeft}><GrFormPreviousLink /> </button>
                    <button className='arrow' onClick={scrollRight}><GrFormNextLink /></button>
                </div>

            </div>

            <div className="carousel-container">

                <div className="items" ref={carouselRef}>
                    {mindData.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.image} alt="Alam" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider