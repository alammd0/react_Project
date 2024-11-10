/** @format */

import React from "react";
import "./Footer.css";
import logo from "../../assets/Swiggy_logo.png";
import FootCompany from "./FootCompany";
import FootContact from "./FootContact";
import LegalData from "./LegalData";
import FootAvail from "./FootAvail";
import LifeSwiggy from "./LifeSwiggy";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer_Wrapper">
            <div className="footer_container">
                <div className="footer_heading">
                    <div className="heading_content">
                        <h2>For better experience,download the Swiggy app now</h2>
                    </div>

                    <div className="image_container">
                        <div className="images">
                            <img
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                                alt="Not Available"
                            />
                        </div>
                        <div className="images">
                            <img
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                                alt="Not Available"
                            />
                        </div>
                    </div>
                </div>

                <div className="footer_content">
                    <div>
                        <img src={logo} alt="Not Available" />
                        <p>@ 2024 by Alam</p>
                    </div>

                    <div className="footer_text">
                        <div>
                            <div>
                                <h3>Company</h3>
                            </div>
                            <div>
                                <FootCompany />
                            </div>
                        </div>

                        <div className="exception">
                            <div>
                                <div>
                                    <h3>Contact us</h3>
                                </div>

                                <div>
                                    <FootContact />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>Legal</h3>
                                </div>
                                <div>
                                    <LegalData />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>Available in:</h3>
                            </div>

                            <div>
                                <FootAvail />
                            </div>
                        </div>

                        <div className="exception-02">
                            <div>
                                <div>
                                    <h3>Life at Swiggy</h3>
                                </div>
                                <div>
                                    <LifeSwiggy />
                                </div>

                            </div>

                            <div >

                                <div>
                                    <h3>Social Links</h3>
                                </div>

                                <div className="social_icons">
                                    <NavLink to="" className="icon">
                                        <FaInstagram />
                                    </NavLink>
                                    <NavLink to="" className="icon">
                                        <IoLogoYoutube />
                                    </NavLink>
                                    <NavLink to="" className="icon">
                                        <FaFacebook />
                                    </NavLink>
                                    <NavLink to="" className="icon">
                                        <FaXTwitter />
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
