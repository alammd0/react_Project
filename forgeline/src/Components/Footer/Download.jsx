import React from 'react'
import { Link } from 'react-router-dom'

const Download = ({ downloadsData }) => {
    return (
        <div className='agency_container'>
        {
            downloadsData.map( (data, index) => (
                <Link className='agency_box' to="" key={index}>
                    <p>{data.name}</p>
                </Link>
             ))
        }
        </div>
    )
}

export default Download