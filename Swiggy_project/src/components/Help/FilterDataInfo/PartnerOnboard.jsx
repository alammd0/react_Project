import React from 'react'
import DropDownSec from './DropDownSec'
import { helpData } from '../../../Data/HelpData'

const PartnerOnboard = (props) => {

  const categories = props.categories
  console.log(categories);
  
  return (
    <div>
      <DropDownSec categories = {categories}  helpData = {helpData}/>
    </div>
  )
}

export default PartnerOnboard