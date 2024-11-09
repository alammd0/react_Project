import React from 'react'
import { lifeatSw } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const LifeSwiggy = () => {
    return (
        <div>
            <div>
                {
                    lifeatSw.map((life) => (
                        <div key={life.id}>
                            <NavLink to="" > {life.life}</NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LifeSwiggy