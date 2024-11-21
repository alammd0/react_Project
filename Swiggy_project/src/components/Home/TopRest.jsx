import React, { useContext } from 'react'
import { functionProviderSwiggy } from '../Context/SwiggyContext';
import { FaRegStar } from "react-icons/fa";
import Filter from '../Filter';
import { Link } from 'react-router-dom';


const TopRest = () => {

    const { foodDelivery } = useContext(functionProviderSwiggy);


    return (
        <div>

            <div className='toprest_container'>

                <div className='top_heading'>
                    <h2>Restaurants with online food delivery</h2>

                    <Filter/>
                </div>


                <div className='food_card_container'>
                    {
                        foodDelivery.map((food) => (
                            <Link to="/offer" key={food.id} className='res_content'>
                                <div className='food_imageContainer'>
                                    <img src={food.imageUrl} alt={food.title}></img>
                                    <div className='overly_color'></div>
                                    <h2 className='off_text'>{food.off}% off Upto {food.rupya}</h2>
                                </div>

                                <div className='food_text_container'>
                                    <h2>{food.title}</h2>
                                    <p className='rating'><span><FaRegStar /></span>{food.rating} . {food.time} mins</p>
                                    <p className='desc'>{food.country}</p>
                                    <p className='desc'>{food.state}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default TopRest