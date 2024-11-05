import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card9 = () => {

    const details = {
        path : "Home / All Products / Luxurious Dark",
        imgUrl : "https://images.pexels.com/photos/10481016/pexels-photo-10481016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "Luxurious Dark",
        code : "SKU: 0009",
        price: "3950",
    }

  return (
    <div>
        <Details 
            details = {details}
            
        />
    </div>
  )
}

export default Card9