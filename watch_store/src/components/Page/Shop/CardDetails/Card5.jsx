import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card5 = () => {

    const details = {
        path : "Home / All Products / Round Analog",
        imgUrl : "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Rolex Analog",
        code : "SKU: 0003",
        price: "25499",
    }
    

  return (
    <div>
        <Details 
            details = {details}
        />
    </div>
  )
}

export default Card5