import React from 'react'
import { lifeatSw } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const LifeSwiggy = () => {
    return (
        <div>
            <div className='footer_text_link'>
                {
                    lifeatSw.map((life) => (
                        <div key={life.id} className='link_text'>
                            <NavLink to="" className="text_link"> {life.life}</NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LifeSwiggy