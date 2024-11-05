import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card4 = () => {

    const details = {
        path : "Home / All Products / Wristwatchs",
        imgUrl : "https://images.pexels.com/photos/19810841/pexels-photo-19810841/free-photo-of-top-view-of-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Rolex Analog",
        code : "SKU: 0005",
        price: "30450",
    }

  return (
    <div>
        <Details 
            details = {details}
        />
    </div>
  )
}

export default Card4