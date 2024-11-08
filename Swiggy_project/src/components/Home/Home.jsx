import React from 'react'
import ImageSlider from './ImageSlider'
import "./Home.css"
import ResturentSlider from './ResturentSlider'

const Home = () => {
  return (
    <div>
        <div className='home_Container'>
            <div>
                <ImageSlider/>               
            </div> 

            <div>
              <ResturentSlider/>
            </div>
        </div>
    </div>
  )
}

export default Home