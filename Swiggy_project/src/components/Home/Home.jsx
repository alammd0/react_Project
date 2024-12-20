import React from 'react'
import ImageSlider from './ImageSlider'
import "./Home.css"
import ResturentSlider from './ResturentSlider'
import TopRest from './TopRest'
import BestPlaces from './BestPlaces'
import NearMe from './NearMe'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>

      <div className='home_Container'>

        <div className='imageSlider_wrapper'>
          <ImageSlider />
        </div>

        <div className='rest_slider_wrapper imageSlider_wrapper'>
          <ResturentSlider />
        </div>

        <div className='imageSlider_wrapper'>
          <TopRest />
        </div>

        <div className='imageSlider_wrapper'>
          <BestPlaces />
        </div>

        <div className='near_wrapper'>
          <NearMe />
        </div>

      </div>

      <div>
          <Footer/>
      </div>
    </div>
  )
}

export default Home