import React, { useEffect } from 'react'
import "./Home.css"
import Profiles from "../../assets/Profiles.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import $ from "jquery"
import "jquery.ripples"
import Alam from "../../assets/Alam.jpg"


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
                        <span><FaLinkedinIn /></span>
                        <span><FaInstagram /></span>
                        <span><FaGithub /></span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
