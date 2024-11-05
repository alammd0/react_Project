import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card1 = () => {

    const details = {
        path : "Home / All Products / Rolex Analog",
        imgUrl : "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Rolex Analog",
        code : "SKU: 0003",
        price: "11751"
    }

  return (
    <div>
        <div>
            <Details 
                details = {details}
            />
        </div>
    </div>
  )
}

export default Card1