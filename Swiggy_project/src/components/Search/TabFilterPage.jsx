import React, { useState } from 'react'
import DetailsFood from './DetailsFood';
import Restaurent from './Restaurent';

const TabFilterPage = ({ tabName, category }) => {
    const [isOpen, setIsOpen] = useState();

    console.log(tabName);

    return (
        <div>

            <div>
                {
                    tabName === 'Dish' ? (
                        <DetailsFood category={category} />
                    ) : (
                        <Restaurent category={category} />
                    )
                }
            </div>

        </div>
    )
}

export default TabFilterPage