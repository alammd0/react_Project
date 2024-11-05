import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card6 = () => {

    const details = {
        path : "Home / All Products / Tissot Watch",
        imgUrl : "https://images.pexels.com/photos/5447382/pexels-photo-5447382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Rolex Analog",
        code : "SKU: 0009",
        price: "27950",
    }

  return (
    <div>
        <Details 
            details = {details}
        />
    </div>
  )
}

export default Card6