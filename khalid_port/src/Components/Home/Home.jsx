import React, { useEffect } from 'react'
import "./Home.css"
import Profiles from "../../assets/Profiles.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import $ from "jquery"
import "jquery.ripples"
import Alam from "../../assets/Alam.jpg"
import { NavLink } from 'react-router-dom';
import { IoLogoYoutube } from "react-icons/io5";


const Home = () => {

    useEffect( () => {
        $(".home_Wrapper").ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,

        })
    }, [])
    
    return (
        <div className='home_Wrapper'>

            <div className='home_Container'>

                <div className='home_contain'>

                    <div className='my_image_home'>
                        <img src={Alam} />
                    </div>

                    <div className='home_heading'>
                        <h2>Hi, I am <span> Khalid Alam</span> </h2>
                    </div>

                    <div className='pragraph_div'>
                        <p>I am a passionate frontend web developer dedicated to crafting clean, well-structured code and delivering pixel-perfect designs. My expertise lies in creating highly interactive websites that come to life with smooth animations and intuitive user interfaces. I focus on responsive design to ensure seamless performance across all devices, making sure every site I build is both visually stunning and functionally flawless.</p>
                    </div>

                    <div className='home_icons'>
                        <NavLink to="https://www.linkedin.com/in/md-khalid-alam-3307b4219/" target='_blank'><FaLinkedinIn /></NavLink>
                        <NavLink to= "https://www.instagram.com/bitcoding01/profilecard/?igsh=cXNhNmQ1bGRvNnU2" target='_blank'><FaInstagram /></NavLink>
                        <NavLink to="https://github.com/alammd0" target='_blank'><FaGithub /></NavLink>
                        <NavLink to="https://www.youtube.com/@BitCoDing-u5y"><IoLogoYoutube /></NavLink>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
