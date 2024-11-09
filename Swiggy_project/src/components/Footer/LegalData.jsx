import React from 'react'
import { legalData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const LegalData = () => {
  return (
    <div>
        <div>
            {
                legalData.map( (legal) => (
                    <NavLink to="">{legal.legal}</NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default LegalData