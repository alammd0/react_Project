import React from 'react'
import "./Project.css"
import Faded from '../faded'
import ImageCont from './ImageCont'

const Project = () => {
    return (
        <div className='project_wrapper'>

            <div className='project_container'>
                <div className='fadded_text_container'>
                    <Faded title={"Project"} />
                    <Faded heading={"Project"} />
                </div>

                <div className='project_cards'>
                    <ImageCont />
                </div>


                <div className='btn'>
                    <button><a href='https://github.com/alammd0' target='_blank' className='button'>Explore More</a></button>
                </div>
            </div>
        </div>
    )
}

export default Project
