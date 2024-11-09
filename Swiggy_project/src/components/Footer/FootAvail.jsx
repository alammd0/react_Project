import React from 'react'
import { availableData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootAvail = () => {
  return (
    <div>
        <div>
            {
                availableData.map( (available) => (
                    <div key={available.id}>
                        <NavLink to = "" > {available.city} </NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootAvail