import React from 'react'
import ImageSlider from './ImageSlider'
import "./Home.css"

const Home = () => {
  return (
    <div>
        <div className='home_Container'>
            <div>
                <ImageSlider/>               
            </div> 
        </div>
    </div>
  )
}

export default Home