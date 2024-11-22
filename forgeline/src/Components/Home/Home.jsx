import React from 'react'
import Hero from './Hero'
import NewIntud from './NewIntud'

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div style={{backgroundColor : "#FAF5E9"}}>
        <NewIntud />
      </div>
    </div>
  )
}

export default Home