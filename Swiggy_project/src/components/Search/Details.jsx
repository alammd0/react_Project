import React, { useState } from 'react'
import DetailsFood from './DetailsFood'
import Restaurent from './Restaurent'
import { SearchData, searchTab } from '../../Data/searchdata'
import TabFilterPage from './TabFilterPage'

const Details = ({ category }) => {


    const [tabName, setTabName] = useState('Dish');

    const handleTabName = (tab) => {
        setTabName(tab);
    }

    console.log(category)

    return (
        <div>
            <div className='tab_res'>
                <div className='tab_name'>
                    {
                        searchTab.map((tab) => (
                            <div className={tabName === tab.name ? 'tab-active' : 'tab-inactive'} key={tab.id} onClick={() => handleTabName(tab.name)}>
                                <button>{tab.name}</button>
                            </div>
                        ))
                    }
                </div>

                <div>
                    {
                        tabName && (
                            <div>
                                <TabFilterPage category={category} tabName={tabName} />
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Details