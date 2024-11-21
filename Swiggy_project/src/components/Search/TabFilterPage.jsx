import React, { useState } from 'react'
import DetailsFood from './DetailsFood';
import Restaurent from './Restaurent';

const TabFilterPage = ({ tabName, category, handleOpenClose, addCartItem, cartItem}) => {

    console.log(tabName);
    console.log(cartItem)


    return (
        <div className="footDetail_wrapper">
            <div>
                {
                    tabName === 'Dish' ? (
                        <DetailsFood addCartItem = {addCartItem} cartItem={cartItem} category={category} />
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