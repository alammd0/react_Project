import React from 'react'
import { contactData } from '../../Data/FooterData'
import { NavLink } from 'react-router-dom'

const FootContact = () => {
  return (
    <div>
        <div className='footer_text_link'>
            {
                contactData.map( (contact) => (
                    <div key={contact.id} className='link_text'>
                        <NavLink to="" className='text_link'>{contact.contact}</NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FootContact