import React from 'react'
import { bestPlaces } from '../../Data/data'
import { Link } from 'react-router-dom'

const BestPlaces = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Best Places to Eat Across Cities</h2>
                </div>

                <div className='best_city'>
                    {
                        bestPlaces.map((place, index) => (
                            <div key={index} className='city_container'>
                                <Link to={place.path}><button className='city_txt'>{place.places}</button> </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BestPlaces