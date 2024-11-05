import React from 'react'
import Details from './Details'

const Gents = () => {
    const details = {
        path: "Home / GENTS",
        imgUrl: "https://static.wixstatic.com/media/a9ff3b_4f89ba04c5d6495c9699ede2a992e276.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9ff3b_4f89ba04c5d6495c9699ede2a992e276.jpg",
        desc: "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title: "GENTS",
        code: "SKU: 0002",
         price: "$89.00"
    }

    return (
        <div>
            <Details 
                details = {details}
            />
        </div>
    )
}

export default Gents