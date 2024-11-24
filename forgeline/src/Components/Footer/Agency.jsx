import React from 'react'
import { Link } from 'react-router-dom'

const Agency = ({ agencyData }) => {

    console.log(agencyData);

    return (
        <div className='agency_container'>
            {
                agencyData.map((data, index) => (
                    <Link className='agency_box' to="/" key={index}>
                        <p>{data.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Agency