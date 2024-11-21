import React from 'react'
import "../components/Home/Home.css"
import { IoFilterCircleOutline } from "react-icons/io5";

const Filter = () => {
    return (
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

    )
}

export default Filter