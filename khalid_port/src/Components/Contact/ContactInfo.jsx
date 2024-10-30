import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const ContactInfo = () => {
    return (
        <div className='contact_from_containers'>

            <h2 className='heading_cont'>Contact Info</h2>

            <div className='container_cont'>
                <div className='icons'><MdEmail /></div>
                <div className='content_icon'>
                    <h2>Email</h2>
                    <p className='colorChange'><a href="mailto: mdkhalidalam001@gmail"> mdkhalidalam001@gmail.com </a></p>
                    <p className='colorChange'><a href="mailto: mdkhalidalam001@gmail"> sonualam96314@gmail.com </a></p>
                </div>
            </div>

            <div className='container_cont'>
                <div className='icons'>
                    <FaPhoneAlt />
                </div>
                <div className='content_icon'>
                    <h2>Phone</h2>
                    <p>
                        <a href="tel:+919507283573">
                            +919507283573
                        </a>
                    </p>
                </div>
            </div>

            <div className='container_cont'>
                <div className='icons'>
                    <IoLocation />
                </div>
                <div className='content_icon'>
                    <h2>Address</h2>
                    <p className='content_icon_text'>Tower Z, Amrapali Sapphire, Sector 45, GAUTAM BUDDHA NAGAR - 201303, Uttar Pradesh</p>
                </div>
            </div>

            <div className='social-icons'>
                <h3>Visite my social profile and get connected</h3>

                <div className='social_icon'>
                    {/* icon - 1 (linkedin) */}
                    <a href='https://www.linkedin.com/in/md-khalid-alam-3307b4219/' target='_blank' className='icon_1'><FaLinkedin /></a>
                    {/* icon - 2 (Intagram) */}
                    <a className='icon_1'><FaInstagramSquare /></a>
                    {/* icon - 2 (Youtube) */}
                    <a className='icon_1'><IoLogoYoutube /></a>
                    {/* icon - 2 (Twitter) */}
                    <a className='icon_1'>
                        <FaXTwitter />
                    </a>
                </div>


            </div>

        </div >
    )
}

export default ContactInfo
