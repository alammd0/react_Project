import React, { useState } from 'react'
import DetailsFood from './DetailsFood';
import Restaurent from './Restaurent';

const TabFilterPage = ({ tabName, category }) => {

    console.log(tabName);

    return (
        <div className="footDetail_wrapper">
            {
                tabName === 'Dish' ? (
                    <DetailsFood category={category} />
                ) : (
                    <Restaurent category={category} />
                )
            }
        </div>
    )
}

export default TabFilterPage