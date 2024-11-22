import React from 'react'
import Hero from './Hero'
import NewIntud from './NewIntud'
import Weare from './Weare'
import Services from './Services'
import { serviceData } from '../../Data/home'

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div style={{ backgroundColor: "#FAF5E9" }}>
        <NewIntud />
      </div>

      <div style={{padding: "130px 0 90px"}}>
        <Weare />
      </div>

      <div style={{padding: "60px 0 60px"}} >
        <Services serviceData = {serviceData} />
      </div>      
    </div>
  )
}

export default Home