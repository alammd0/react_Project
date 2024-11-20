import React, { useState } from 'react'
import DetailsFood from './DetailsFood';
import Restaurent from './Restaurent';

const TabFilterPage = ({ tabName, category, handleOpenClose, addCartItem}) => {

    console.log(tabName);


    return (
        <div className="footDetail_wrapper">
            <div>
                {
                    tabName === 'Dish' ? (
                        <DetailsFood addCartItem = {addCartItem} category={category} />
                    ) : (
                        <Restaurent category={category} />
                    )
                }
            </div>
            <div className='CloseBtn'>
                <button onClick={handleOpenClose}>Close</button>
            </div>

        </div>
    )
}

export default TabFilterPage