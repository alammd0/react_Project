import React from 'react'
import { burgerDataRest } from '../../Data/detailFood'
import RestCards from './RestCards'

const Restaurent = ({ category }) => {

  const filterDatares = burgerDataRest.filter((res) =>
    res.name.toLowerCase().includes(category.toLowerCase())
  )


  return (

    <div className='Resturent_container'>
      {
        filterDatares.map((data, index) => (
          <div className='resturent_Cards' key={index}>
            <RestCards data={data} />
          </div>
        ))
      }
    </div>

  )
}

export default Restaurent