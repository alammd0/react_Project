import React from 'react'
import { Link } from 'react-router-dom'
import Agency from './Agency'
import Community from './Community'
import Download from './Download'
import { agencyData } from '../../Data/footer'
import { downloadsData } from '../../Data/footer'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_container'>
                <div className='footer_top_container'>
                    <div className='footer_top_heading'>
                        <h2>SIGN UP FOR OUR EMAIL NEWSLETTER</h2>
                        <p>Get the latest updates and industrial marketing insights in your inbox.</p>
                        <p>After signing up for the newsletter, you will also receive occasional surveys, event invitations, or special offers from INDUSTRIAL and our partners via email. We will not sell nor distribute your email address to any third party at any time. View our <span><Link to="/">Privacy Policy</Link></span></p>
                    </div>
                    <div className='form_section'>
                        <form className='footer_top_input'>

                            <input type='text'></input>


                            <Link to="" className='form_btn'>
                                <button>Sign Up Now</button>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className='footer_buttom_container'>
                    <div className='footer_buttom_wrapper'>
                        <h2>Our Agency</h2>
                        <Agency agencyData={agencyData} />
                    </div>

                    <div className='footer_buttom_wrapper'>
                        <h2>Community</h2>
                        <Community />
                    </div>

                    <div className='footer_buttom_wrapper'>
                        <h2>Download</h2>
                        <Download downloadsData={downloadsData} />
                    </div>

                    <div className='footer_buttom_wrapper'>
                        <h2>Contact</h2>

                        <p>1-866-529-8908</p>
                        <Link className='get_toch' to="/">Get in Touch</Link>
                        <Link className='get_toch' >1401 5th Ave N. <br></br>
                            Nashville, TN 37208</Link>
                    </div>
                </div>

                <div className='our_txt'>
                    <p>© 2024 Industrial Strength Marketing</p>
                </div>
            </div>
        </div>
    )
}

export default Footer