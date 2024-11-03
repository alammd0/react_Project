import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    const cardData = props.cardData;
    console.log(cardData);

    const [ishover, setisHovered] = useState(false);

    return (
        <div>
            <div className='shoping_card'
                onMouseEnter={() => setisHovered(true)}
                onMouseLeave={() => setisHovered(false)}
            >
                <div>
                    <div className='product_img'>
                        <img src={cardData.imgUrl} alt={cardData.title} />
                    </div>

                    <div className='product_title'>
                        {
                            !ishover && (
                                <div>
                                    <h2>{cardData.title}</h2>
                                    <p> $ {cardData.price}</p>
                                </div>
                            )
                        }

                        {
                            ishover && (
                                <div>
                                    <button className='product_card'>Add Cart</button>

                                    <div className='viewBtn'>
                                        <NavLink className="viewDetail" to={cardData.path} >View Detail</NavLink>
                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card