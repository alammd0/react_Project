import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"

const Services = ({ serviceData }) => {
    return (
        <div className='services_container'>

            <div className='services_txt_heading'>
                <p>What we provide</p>
                <h3>Featured Services</h3>
            </div>

            <div className='services_container_card'>
                {
                    serviceData.map((service) => (
                        <div key={service.id} className='service_card'>
                            <Link className='img_content' to="/"> <img src={service.url} alt='not Available'></img></Link>

                            <div className='txt_content_service'>
                                <Link to="" className='link'>{service.title}</Link>
                                <p>{service.desc}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

            <Link className='service_btn' to="/">
                <button>SEE More</button>
            </Link>

        </div>
    )
}

export default Services