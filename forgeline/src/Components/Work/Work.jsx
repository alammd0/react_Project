import React from 'react'
import HeroWork from './HeroWork/HeroWork'
import Footer from '../Footer/Footer'
import WorkCard from './WorkCard/WorkCard'

const Work = () => {
  return (
    <div>
      <div>
        <HeroWork />
      </div>

      <div style={{padding : "120px 0"}}>
        <WorkCard />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Work