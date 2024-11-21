import React from 'react'
import { nearme } from '../../Data/data'
import { Link } from 'react-router-dom'

const NearMe = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Best Cuisines Near Me</h2>
                </div>

                <div className='best_city'>
                    {
                        nearme.map((location, index) => (
                            <div key={index} className='city_container'>
                                <Link  to={location.path}>
                                    <button className='city_txt'>{location.location}</button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NearMe