import React from 'react'
import { contactData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootContact = () => {
  return (
    <div>
        <div>
            {
                contactData.map( (contact) => (
                    <div key={contact.id}>
                        <NavLink to="">{contact.contact}</NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootContact