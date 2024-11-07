import React, { useContext } from 'react'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import { mindData } from '../../data';
import { FcNext, FcPrevious } from "react-icons/fc";

const ImageSlider = () => {

    const { currentIndex,
        nextSlideImage,
        prevSlideImage } = useContext(functionProviderSwiggy);

    return (
        <div>
            <div className='heading'>
                <div>
                    <h2>What's on your mind?</h2>
                </div>

                <div className='click_btn'>
                    <button onClick={nextSlideImage}><FcNext /></button>
                    <button onClick={prevSlideImage}><FcPrevious /></button>
                </div>
            </div>
            <div className='image_container'>
                {
                    mindData.map((Image, index) => (
                        <div key={index}>
                            <img src={Image.image} alt="not Available" />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default ImageSlider