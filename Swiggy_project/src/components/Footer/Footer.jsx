import React from 'react'
import "./Footer.css"
import logo from "../../assets/Swiggy_logo.png"
import FootCompany from './FootCompany'
import FootContact from './FootContact'
import LegalData from './LegalData'
import FootAvail from './FootAvail'
import LifeSwiggy from './LifeSwiggy'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer_Wrapper'>
            <div className='footer_container'>
                <div className='footer_heading'>
                    <div className='heading_content'>
                        <h2>For better experience,download the Swiggy app now</h2>
                    </div>

                    <div className='image_container'>
                        <div className='images'>
                            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt='Not Available' />
                        </div>
                        <div className='images'>
                            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt='Not Available' />
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={logo} alt='Not Available' />
                        <p>@ 2024 by Alam</p>
                    </div>

                    <div>

                        <div>
                            <FootCompany />
                        </div>

                        <div>
                            <div>
                                <FootContact />
                            </div>
                            <div>
                                <LegalData />
                            </div>
                        </div>

                        <div>
                            <FootAvail />
                        </div>

                        <div>
                            <div>
                                <LifeSwiggy />
                            </div>

                            <div>
                                <NavLink to=""><FaInstagram /></NavLink>
                                <NavLink to=""><IoLogoYoutube /></NavLink>
                                <NavLink to=""><FaFacebook /></NavLink>
                                <NavLink to=""><FaXTwitter /></NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer