import React from 'react'
import { burgerDetRest } from '../../Data/detailFood'
import CardDetail from './CardDetail'


const DetailsFood = ({ category }) => {

  const filterDetails = burgerDetRest.filter((tag) =>
    tag.name.toLowerCase().includes(category.toLowerCase())
  )

  return (
    <div className='foodDetail_wrapper'>
      <div className="foodDetail_container">
        {
          filterDetails.map((data, index) => (
            <div className="foodDetails_card" key={index}>
              <CardDetail data={data} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DetailsFood