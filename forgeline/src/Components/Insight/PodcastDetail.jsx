import React from 'react'
import ReadMore from '../ReadMoreBtn/ReadMore'

const PodcastDetail = ({ insightData }) => {
    return (
        <div className='insightDetail_wrapper'>
            {
                insightData.map((item, index) => (
                    <div className='item_data' key={index}>
                        <div className='img_container'>
                            <img src={item.url} alt={item.title} />
                        </div>

                        <div className='txt_container'>
                            <h6>PODCASTs</h6>

                            <div className='parag_desc'>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>

                            <div style={{paddingTop : "24px"}}>
                                <ReadMore text="Learn More" />
                            </div>

                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PodcastDetail