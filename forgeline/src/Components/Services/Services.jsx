import React from 'react'
import ServicesHero from './ServicesHero/ServicesHero'
import "./Services.css"
import WhatDo from './WhatDo/WhatDo'
import { serviceDataPage } from '../../Data/services'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Services = () => {
    return (
        <div>
            <div>
                <ServicesHero />
            </div>

            <div className='focused_Wrapper'>
                <h2>Focused On Results</h2>
                <p>An industrial organization is complicated and interconnected. Dysfunction in one area can lead to health issues in another – just like the human body. So even though we love a quick marketing win as much as the next guy, we don’t just diagnose and treat symptoms. We instead look at root cause issues throughout the business, then implement a holistic mix of services across different practice areas.</p>
            </div>

            <div>
                <WhatDo serviceDataPage={serviceDataPage} />
            </div>


            <div className='get_touch'>
                <p>
                    We apply our services across three client engagement types: a custom agency of record relationship, one-off project basis, or structured monthly marketing package – for small and medium-sized manufacturers – called Communicator.
                </p>

                <Link className='services_btn' to="">
                    <button>Get In Touch</button>
                </Link>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Services