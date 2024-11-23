import React from 'react'
import "./Readmore.css"

const ReadMore = (prop) => {
    return (
        <div className='btn_readMore'>
            <button>{prop.text} <span>&rarr;</span> </button>
        </div>
    )
}

export default ReadMore