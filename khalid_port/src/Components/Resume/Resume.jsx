import React from 'react'
import Faded from '../faded';
import "./Resume.css"
import icon2 from "../../assets/resume-icon2.png";
import icon1 from "../../assets/resume-icon1.png";
import { TiShoppingBag } from "react-icons/ti";

const Resume = () => {

    let educationData = [
        {
            degree: "B.Tech in Computer Science",
            year: "2021 - 2025",
            university: "Galgotias University"
        },
        {
            degree: "Science",
            year: "2018 - 2020",
            university: "M. H. K. College"
        },
        {
            degree: "High School",
            year: "2016 - 2018",
            university: "Gopal Sah Vidyalaya"
        },
    ]


    let experienceData = [
        {
            position: "Data Structure Training",
            year: "July 1, 2024 - August 30, 2024",
            name: "Galgotias University",
            desc: "Learn about the Data Structure and Algorithms. That means learn about the Array, String, Linked list etc...."
        },
        {
            position: "Student",
            year: "December 01, 2022 - March 30, 2024",
            name: "Code Help Online",
            desc: "Learn about the Mern Stack Devlopment and Web Devlopment Technology."
        }
    ]

    return (
        <div className='resume_wrapper'>
            <div className='resume_container'>

                <div className='fadded_text_container'>
                    <Faded title={"RESUME"} />
                    <Faded heading={"RESUME"} />
                </div>

                <div className='resume_content_container'>
                    
                    <div className='education_container'>
                        <div className='heaading'>
                            <img src={icon2} alt='not' />
                            <h2>Education</h2>
                        </div>

                        <div className='deatail'>
                            <div className='timeline'>
                                {
                                    educationData.map((data, index) => (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-dot"></div>
                                            <h2>{data.degree}</h2>
                                            <p>{data.year}</p>
                                            <p id='name'>{data.university}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='experiences_container'>
                        <div className='heaading'>

                            <img src={icon1}></img>

                            <h2>Experiences</h2>
                        </div>

                        <div className='deatail'>
                        <div className='empty'></div>
                            <div className='timeline'>
                                {
                                    experienceData.map((data, index) => (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-dot"></div>
                                            <h2>{data.position}</h2>
                                            <p>{data.year}</p>
                                            <p id='name'>{data.name}</p>
                                            <p>{data.desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume
