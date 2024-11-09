import React, { useContext } from 'react'
import { functionProviderSwiggy } from '../Context/SwiggyContext';
import { IoFilterCircleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";


const TopRest = () => {

    const { foodDelivery } = useContext(functionProviderSwiggy);


    return (
        <div>

            <div className='toprest_container'>

                <div className='top_heading'>
                    <h2>Restaurants with online food delivery</h2>

                    <div className='tabBtn'>
                        <button className='btn_btn'> Filter <IoFilterCircleOutline /></button>

                        <select className='drp_down'>
                            <option>Sort by</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Ratings</option>
                            <option>Delivery Time</option>
                        </select>



                        <button className='btn_btn'>
                            Fast Devlivery
                        </button>

                        <button className='btn_btn'>
                            Ratings 4.0+
                        </button>

                        <button className='btn_btn'>
                            Offers
                        </button>


                        <button className='btn_btn'>
                            Rs. 300 - Rs. 600
                        </button>

                        <button className='btn_btn'>
                            Less than Rs - 300
                        </button>

                    </div>

                </div>


                <div className='food_card_container'>
                    {
                        foodDelivery.map((food) => (
                            <div key={food.id} className='res_content'>
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
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default TopRest