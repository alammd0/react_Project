import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ImageCard = ({ imgScr, link, title, desc }) => {

    const [isHovered, setisHovered] = useState(false);

    console.log(imgScr);

    return (
        <div
            className='image-card'
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
        >

            <div className='img_box'>
                <img src={imgScr} alt={title} className='image' />
            </div>


            {isHovered && (
                <div className="info-overlay">
                    <div className='click'>
                        <a href={link} target="_blank" rel="noopener noreferrer">Check</a>
                    </div>

                    <div>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageCard
