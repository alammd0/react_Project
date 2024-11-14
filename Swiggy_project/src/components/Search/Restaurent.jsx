import React from 'react'
import { burgerDataRest } from '../../Data/detailFood'
import RestCards from './RestCards'

const Restaurent = ({ category }) => {

  const filterDatares = burgerDataRest.filter((res) =>
    res.name.toLowerCase().includes(category.toLowerCase())
  )


  return (
    <div>
      <div>
        {
          filterDatares.map((data, index) => (
            <div key={index}>
              <RestCards data={data} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Restaurent