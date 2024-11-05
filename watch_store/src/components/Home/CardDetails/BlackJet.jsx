import React from 'react'
import Details from './Details'

const BlackJet = () => {

    const details = {
        path : "Home/BLACK JET",
        imgUrl : "https://static.wixstatic.com/media/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.jpg/v1/fill/w_274,h_274,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_14fdf403ceef4f678368fdc3ee455fdf.webp",
        desc : "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title : "BLACK JET",
        code : "SKU: 0001",
        price: "79.00"
    }

    return (
        <div>
            <Details
                details={details}
            />
        </div>
    )
}

export default BlackJet