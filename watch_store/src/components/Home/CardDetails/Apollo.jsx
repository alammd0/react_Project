import React from 'react'
import Details from './Details'

const Apollo = () => {
    const details = {
        path : "Home / APOLLO",
        imgUrl : "https://static.wixstatic.com/media/a9ff3b_e89951f99c7443d9ba138aef21663e22.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9ff3b_e89951f99c7443d9ba138aef21663e22.jpg",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "APOLLO",
        code : "SKU: 0006",
        price: "59.00",
    }
  return (
    <div>
        <Details details = {details}cd 
        />
    </div>
  )
}



export default Apollo