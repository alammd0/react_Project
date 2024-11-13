import React from 'react'
import { burgerDataRest } from '../../Data/detailFood'


const DetailsFood = (props) => {

    const category = props.category ;

    const ourDatais = burgerDataRest[category];

    console.log(ourDatais);

  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default DetailsFood