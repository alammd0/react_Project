import React from 'react'
import { availableData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootAvail = () => {
  return (
    <div>
        <div className='footer_text_link'>
            {
                availableData.map( (available, index) => (
                    <div key={index} className='link_text'>
                        <NavLink to = ""  className='text_link'> {available.city} </NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootAvail