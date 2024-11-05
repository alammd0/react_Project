import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card2 = () => {

    const details = {
        path : "Home / All Products / Marathon Watch",
        imgUrl : "https://images.pexels.com/photos/12582201/pexels-photo-12582201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Marathon Watch",
        code : "SKU: 0005",
        price: "19880"
    }

  return (
    <div>
        <Details 
            details = {details}
        />
    </div>
  )
}

export default Card2