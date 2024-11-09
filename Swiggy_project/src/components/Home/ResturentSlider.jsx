import React from 'react'
import { resurentImage } from '../../Data/data'
import { FaRegStar } from "react-icons/fa";
import { useContext } from 'react';
import { functionProviderSwiggy } from '../Context/SwiggyContext';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr"

const ResturentSlider = () => {

    console.log(resurentImage);


    const { scrollLeft, scrollRight, carouselRef } = useContext(functionProviderSwiggy);

    return (
        <div>
            <div className='resturent_Container'>
                <div className='resturent_heading'>
                    <h2>Top restaurant chains</h2>

                    <div className='res_btn'>
                        <button className='arrow' onClick={scrollLeft}><GrFormPreviousLink /> </button>
                        <button className='arrow' onClick={scrollRight}><GrFormNextLink /></button>
                    </div>
                </div>

                <div className='resturent_Content' ref={carouselRef}>
                    {
                        resurentImage.map((data, index) => (
                            <div className='res_content' key={index}>
                                <div className='image_Container'>
                                    <img className="image" src={data.imageUrl} alimageUrlt={data.title} height="350" />
                                    <div className='overly'></div>
                                    <h2 className='off'>{data.off}% off</h2>
                                </div>

                                <div className='desc_Container'>
                                    <h3>{data.title}</h3>
                                    <p className='rating'><span><FaRegStar /></span>{data.rating} . {data.time} mins</p>
                                    <p className='desc'>{data.desc}</p>
                                    <p className='desc'>{data.location}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ResturentSlider