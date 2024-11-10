import React, { useContext } from 'react'
import { filterData } from '../../Data/HelpData'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import PartnerOnboard from './FilterDataInfo/PartnerOnboard';

const HelpNavFilter = () => {

    const {handleCategory, selectCategories} = useContext(functionProviderSwiggy);

    console.log(selectCategories);

  return (
    <div>
        <div>
            {
                filterData.map( (data) => (
                    <button key={data.id} onClick={ () => handleCategory(data.head)}>
                        {data.head}
                    </button>
                ))
            }
        </div>

        {
            selectCategories && (
                <PartnerOnboard categories = {selectCategories}/>
             )
        }


    </div>
  )
}

export default HelpNavFilter