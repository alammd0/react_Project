import React from 'react'
import { aboutData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootCompany = () => {
  return (
    <div>
        <div className="footer_text_link">
            {
                aboutData.map( (company) => (
                    <div key={company.id} className='link_text'>
                        <NavLink to="" className="text_link">{company.company}</NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootCompany