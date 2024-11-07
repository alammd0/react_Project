import React from 'react'
import "./About.css"
import About_img from "../../assets/About_img.png"
import Faded from '../faded'

const About = () => {
    return (
        <div className='about_wrapper'>
            <div className='about_container'>

                <div className='fadded_text_container'>
                    <Faded title = {"About Me"} />
                    <Faded heading = {"About Me"} />
                </div>

                <div className='info_container'>
                
                    <div className='info_img'>
                        <img src={About_img} alt="No Image" />
                    </div>

                    <div className='information_box'>
                        <div className='infor_heding'>
                            <h2>Hi There! I'm Md Khalid Alam</h2>
                        </div>
                        <div className='position'>
                            <p>Final Year Computer Science and Engineering</p>
                        </div>
                        <div className='about_ifo'>
                            <p>Hi, I'm Md Khalid Alam, a final-year Computer Science and Engineering student with a passion for technology and web development. I specialize in frontend development, focusing on building interactive, responsive websites using HTML, CSS, and JavaScript(React and TailWind). <br /> <br />

                                I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm constantly learning and growing my skills, eager to apply what I learn in real-world projects. My goal is to create efficient, scalable, and engaging web experiences that provide value to users.</p>
                        </div>

                        <hr></hr>


                        <div className='some_inf'>

                            <p><span>Phone</span> : +91-9507283573</p>

                            <p><span>Email</span> : mdkhalid001@gmail.com</p>
                            <p><span>From</span> : Noida, UP - 201303, India</p>
                            <p><span>Language</span> : Hindi, English, Urdu</p>
                            <p><span>Freelance</span> : Available</p>

                        </div>
                        <div className='btn'>
                            <button >Download CV</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
