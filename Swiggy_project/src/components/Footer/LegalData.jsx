import React from 'react'
import { legalData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const LegalData = () => {
  return (
    <div>
      <div className='footer_text_link'>
        {
          legalData.map((legal) => (
            <div key={legal.key} className='link_text'>
              <NavLink to="" className='text_link'>{legal.legal}</NavLink>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default LegalData