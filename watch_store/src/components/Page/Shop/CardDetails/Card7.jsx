import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card7 = () => {

    const details = {
        path : "Home / All Products / Wristwatchs",
        imgUrl : "https://images.pexels.com/photos/20464757/pexels-photo-20464757/free-photo-of-close-up-of-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Rolex Analog",
        code : "SKU: 0007",
        price: "23950",
    }

  return (
    <div>
        <Details 
            details = {details}
        />
    </div>
  )
}

export default Card7