import React from 'react'
import Details from './Details'

const XtimeSport = () => {

    const details = {
        path: "Home / XTIME SPORT",
        imgUrl: "https://static.wixstatic.com/media/a9ff3b_7dce82cc188848a09707966954bd73eb.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9ff3b_7dce82cc188848a09707966954bd73eb.jpg",
        desc: "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title: "XTIME SPORT",
        code: "SKU: 0008",
        price: "79.00",
    }


  return (
    <div>
        <Details details = {details} />
    </div>
  )
}

export default XtimeSport