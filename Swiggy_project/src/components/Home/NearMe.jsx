import React from 'react'
import { nearme } from '../../data'

const NearMe = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Best Cuisines Near Me</h2>
                </div>

                <div className='best_city'>
                    {
                        nearme.map((location) => (
                            <div key={location.id} className='city_container'>
                                <button className='city_txt'>{location.location}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NearMe