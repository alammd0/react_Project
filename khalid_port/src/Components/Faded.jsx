import React from 'react'
import "./Faded.css";

const Faded = (props) => {


    let title = props.title;
    let heading = props.heading;


    return (
        <div>
            <div className='fadded_text'>
                <h2 className="about-title" >{title}</h2>
                <h2 className="highlight" >{heading}</h2>
            </div>
        </div>
    )
}

export default Faded
