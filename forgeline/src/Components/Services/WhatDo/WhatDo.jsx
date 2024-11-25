import React from 'react'
import ReadMore from '../../ReadMoreBtn/ReadMore'
import "./WhatDo.css"

const WhatDo = ({ serviceDataPage }) => {
    return (
        <div className='whatdo_wrapper'>
            <h2>What We Do</h2>
            {
                serviceDataPage.map((service, index) => (
                    <div className='service_categry' key={index}>
                        <div className='image_box'>
                            <img src={service.url} />
                        </div>
                        <div className='txt_box'>
                            <div className='txt_boxex'>
                                <h2>{service.name}</h2>
                                <p>{service.desc}</p>
                            </div>

                            <div>
                                <ReadMore text="See more" />
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className='last_whatDo'>
                <h2>
                    Profit will be the reward we share for manufacturing a satisfied customer.
                </h2>

                <p>- James E. Soto</p>
            </div>
        </div>
    )
}

export default WhatDo