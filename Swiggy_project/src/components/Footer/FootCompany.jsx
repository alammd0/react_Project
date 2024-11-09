import React from 'react'
import { aboutData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootCompany = () => {
  return (
    <div>
        <div>
            {
                aboutData.map( (company) => (
                    <div key={company.id}>
                        <NavLink to="">{company.company}</NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootCompany