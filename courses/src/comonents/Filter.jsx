import React from 'react'


const Filter = ({ filterData, categary, setCategary }) => {

    function titleClickHandler(title) {
        setCategary(title);
    }

    return (
        <div className='filter_container'>{
            filterData.map((heading) => (
                <div key={heading.id} className='heading_text'>
                    <button onClick={() => titleClickHandler(heading.title)}  
                    className={categary === heading.title ? 'active' : 'inactive' }>{heading.title}</button>
                </div>
            ))
        }</div>
    )
}

export default Filter