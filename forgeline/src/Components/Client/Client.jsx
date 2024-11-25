import React from 'react'
import ClientHero from './ClientHero/ClientHero'
import { Target } from './Target/Target'
import { clientImage } from '../../Data/client'
import Footer from '../Footer/Footer'

const Client = () => {
    return (
        <div>

            <div>
                <ClientHero />
            </div>

            <div style={{ paddingTop: "70px", paddingBottom: "70px" }}>
                <Target />
            </div>

            <div className='great_container'>
                <div className='great_heading'>
                    <h2>Great Clients = Great Work</h2>
                    <p>We’ve partnered with clients in almost every industrial sector
                        and from every region.</p>
                </div>
                <div className='great_image_container'>
                    {
                        clientImage.map((Image, index) => (
                            <div className='image_size' key={index}>
                                <img src={Image.url} alt="Ha bha error" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Client