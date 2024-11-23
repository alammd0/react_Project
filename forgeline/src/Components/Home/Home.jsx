import React from 'react'
import Hero from './hero/Hero'
import Services from './Servies/Services'
import { serviceData } from '../../Data/home'
import NewIntud from './NewIntud/NewIntud'
import Weare from './Cardwe/Weare'
import CardSlider from './CardSlider/CardSlider'
import { sliderCardData } from '../../Data/home'

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div style={{ backgroundColor: "#FAF5E9" }}>
        <NewIntud />
      </div>

      <div style={{ padding: "130px 0 90px" }}>
        <Weare />
      </div>

      <div style={{ padding: "60px 0 60px" }} >
        <Services serviceData={serviceData} />
      </div>

      <div>
        <CardSlider sliderCardData={sliderCardData} />
      </div>
    </div>
  )
}

export default Home