import React, { useContext } from 'react'
import { functionProviderSwiggy } from '../../Context/SwiggyContext'
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropDownSec = ({ heading, desc }) => {

  const { isOpen, clickDropdown } = useContext(functionProviderSwiggy);

  return (
    <div>

      <div>
        <h2>{heading}</h2>
        <span>{isOpen ? (<MdArrowDropUp />) : (<MdOutlineArrowDropDown />)}</span>
      </div>

      <div>

        {isOpen && (

          <div>
            <ul>
              {desc.points.map((point, index) => (
                <li key={index}>{point.point}</li>
              ))}
            </ul>
          </div>

        )}

      </div>

    </div>
  )
}

export default DropDownSec