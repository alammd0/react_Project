import React from 'react'
import RestCard from './RestCard'

const RestCards = ({ data }) => {

    console.log("Rest", data)
    return (
        <div>
            <div>
                <RestCard
                    title={data.title}
                    url={data.url}
                    company={data.company}
                    rating={data.rating}
                    price={data.price}
                    off={data.off}
                    offrupya={data.offrupya}
                />
            </div>
        </div>
    )
}

export default RestCards