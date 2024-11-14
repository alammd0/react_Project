import React from 'react'
import { CiStar } from "react-icons/ci";

const RestCard = ({ title, url, company, price, rating, off, offrupya }) => {

    return (
        <div>
            <div>
                <div>

                    <div>
                        <div>
                            <img src={url} alt={title} />
                        </div>

                        <div>
                            <p>{off} off</p>
                            <p>upto {offrupya}</p>
                        </div>
                    </div>

                    <div>
                        <p>{title}</p>
                        <p><CiStar /> <span>{rating} . {price} for two</span> </p>
                        <p>{company}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RestCard