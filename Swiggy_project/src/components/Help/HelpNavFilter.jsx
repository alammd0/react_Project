import React, { useContext } from 'react'
import { filterData } from '../../Data/HelpData';
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import PartnerOnboard from './PartnerOnboard';

const HelpNavFilter = () => {

    const { handleCategory, selectCategories } = useContext(functionProviderSwiggy);

    console.log(selectCategories);

    return (
        <div className='help_data_container'>

            <div className='filter_data'>
                {
                    filterData.map((data, index) => (
                        <button className={selectCategories === data.head ? 'filter_btn_click' : 'filter_btn_nonclick'} key={index} onClick={() => handleCategory(data.head)}>
                            {data.head}
                        </button>
                    ))
                }
            </div>

            <div>
                {
                    selectCategories && (
                        <PartnerOnboard categories={selectCategories} />
                    )
                }
            </div>

        </div>
    )
}

export default HelpNavFilter