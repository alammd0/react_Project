import React from 'react'
import "./Insight.css"
import Podcast from './Podcast'
import PodcastDetail from './PodcastDetail'
import { insightData } from '../../Data/insight'
import Footer from '../Footer/Footer'

const Insight = () => {
    return (
        <div className=''>
            <div className='feture_container'>
                <h6>Featured</h6>

                <h2>Industrial Insights</h2>

                <p>You can make marketing a strength of your business, but it begins with challenging perceptions and learning the critical trends impacting your industry.</p>
            </div>

            <div className='podcar_wrapper' style={{ marginTop: "120px", marginBottom: "40px" }}>
                <Podcast />
            </div>

            <div style={{ marginTop: "120px", marginBottom: "40px" }}>
                <PodcastDetail insightData={insightData} />
            </div>


            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Insight