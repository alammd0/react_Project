import React from 'react'
import { filterData } from '../../Data/HelpData'

const HelpNavFilter = () => {
  return (
    <div>
        <div>
            {
                filterData.map( (data) => (
                    <button>
                        {data.head}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default HelpNavFilter