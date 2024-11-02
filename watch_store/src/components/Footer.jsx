import React from 'react'
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='footer_container'>
                <p>
                    © 2024 by ALAM. Powered and secured by LAZY
                </p>

                <div className='footer_icon'>
                    <NavLink to="https://www.youtube.com/@BitCoDing-u5y" target='_blank' className='foot_icon'><CiYoutube /></NavLink>
                    <NavLink to="https://www.instagram.com/iamkhalidalam?igsh=MXU0d25hOTI3M3VscQ==" target='_blank' className='foot_icon'><CiInstagram /></NavLink>
                    <NavLink to="https://x.com/thekhalidalam?t=J7v4frsPVuQ4HsVshkWoEQ&s=09" target='_blank' className='foot_icon'><FaXTwitter /></NavLink>
                </div>

            </div>
        </div>
    )
}

export default Footer
