import React from 'react'
import { Link } from 'react-router-dom'
import { FaBlog } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Community = () => {


    return (
        <div className='agency_container'>
            <Link className='agency_box comm' to="/" >
                <span><FaBlog /></span>
                <p>Blog</p>
            </Link>
            <Link className='agency_box comm' to="/" >
                <span><FaYoutube /></span>
                <p>Youtube</p>
            </Link>
            <Link className='agency_box comm' to="/">
                <span><FaFacebookSquare /></span>
                <p>Facebook</p>
            </Link>

            <Link className='agency_box comm' to="/">
                <span><FaXTwitter /></span>
                <p>Twitter</p>
            </Link>

            <Link className='agency_box comm' to="">
                <span><IoLogoLinkedin /></span>
                <p>LinkedIn</p>
            </Link>
        </div>
    )
}

export default Community