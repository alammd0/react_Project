import React, { useState } from 'react'
import data from "../data"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = () => {

    const [isReadMore, SetIsReadMore] = useState([]);

    const [isTours, setIsTours] = useState(data);

    const showMoreHanlders = (id) => {
        SetIsReadMore((prev) =>
            prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
        );
    };

    const removeTour = (id) => {
        const newTours = isTours.filter(tour =>
            tour.id !== id
        );

        setIsTours(newTours);
    }


    if (isTours.length === 0) {
        return <div className='flex flex-col gap-3 justify-center items-center h-screen mx-auto'>

            <h2 className='text-[1.25rem] text-white font-bold'>Not Tours are there</h2>

            <button className='px-6 py-3 bg-gray-500 rounded-md text-[1.25rem] font-bold' onClick={() => setIsTours(data)}>Get Tours Details</button>

        </div>
    }


    function movetheDetail(tour){

    }


    return (
        <div className="flex flex-wrap gap-10 text-white pt-10 pb-10 mx-auto items-center">
            {
                isTours.map((tour) => (
                    <div key={tour.id} className='bg-gray-500 max-w-[320px] mx-auto border rounded-md px-4 py-5 leading-7 transition-all hover:-translate-y-3 hover:shadow-md hover:shadow-zinc-400'>
                        <img className='h-[280px] w-[300px] border-red-400 rounded-md scale-95 hover:scale-100 transition-all' src={tour.imageUrl} alt={tour.name} />

                        <h2 className=' text-[1.5rem] font-bold text-gray-900 pt-2 flex items-center gap-1'> <span className=' text-[1.25rem] font-normal'><FaIndianRupeeSign /></span> {tour.price}</h2>

                        <h3 className='text-[1.25rem] pb-2 font-bold text-gray-900 pl-1'>{tour.name}</h3>

                        <p className='text-[1rem] pb-2 font-normal text-gray-900'>{
                            isReadMore.includes(tour.id) ? tour.desc : `${tour.desc.substring(0, 150)}...`
                        }
                            <span
                                onClick={() => showMoreHanlders(tour.id)}
                                className=' cursor-pointer text-zinc-950 font-bold text-base'
                            >
                                {!isReadMore.includes(tour.id) ? "Read More" : "Show less"}
                            </span>
                        </p>

                        <div className='flex justify-between pt-3 items-center'>
                            <button onClick={() => removeTour(tour.id)} className='bg-gray-950 px-4 py-2 text-[1rem] rounded-md text-center capitalize cursor-pointer scale-95 hover:shadow-lg hover:shadow-red-500 hover:scale-100'> Not Interest</button>
                            <Link to={"/"}>
                                <button  className='bg-gray-950 px-4 py-2 text-[1rem] rounded-md text-center capitalize cursor-pointer'> Explore More</button>
                            </Link>

                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Card