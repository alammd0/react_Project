import React from 'react'
import { bestPlaces } from '../../Data/data'

const BestPlaces = () => {
  return (
    <div>
        <div>
            <div>
                <h2>Best Places to Eat Across Cities</h2>
            </div>

            <div className='best_city'>
                {
                    bestPlaces.map( (place) => (
                        <div key={place.id} className='city_container'>
                            <button className='city_txt'>{place.places}</button> 
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BestPlaces