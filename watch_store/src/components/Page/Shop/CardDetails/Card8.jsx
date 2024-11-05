import React from 'react'
import Details from '../../../Home/CardDetails/Details'

const Card8 = () => {

    const details = {
        path: "Home / All Products / Chronograph Wristwatch",
        imgUrl: "https://images.pexels.com/photos/10436602/pexels-photo-10436602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.",
        title: "Rolex Analog",
        code: "SKU: 0004",
        price: "24980"
    }

    return (
        <div>
            <Details
                details={details}
            />
        </div>
    )
}
export default Card8