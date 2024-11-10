/** @format */

import React, { useContext } from "react";
import { functionProviderSwiggy } from "../../Context/SwiggyContext";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropDownSec = (props) => {

  const categorie = props.categories;
  // console.log("Inside the DropDown : ", categorie);

  const helpData = props.helpData;
  // console.log(helpData)

  const categorieData = helpData[categorie]
  console.log("Inside the DropDown : ", categorieData)

  const { isOpen, clickDropdown, } = useContext(functionProviderSwiggy);

  return (
    <div>
      {
        categorieData ? (
          <div>
            {
              categorieData.map((heading, index) => (
                <div key={index}>
                  <div onClick={() => clickDropdown(index)} >
                    <div><h2>{heading.heading}</h2></div>
                    <div><p>{isOpen === index ? (<MdArrowDropUp />) : (<MdOutlineArrowDropDown />)}</p></div>
                  </div>

                  <div>
                    {
                      isOpen === index && (
                        <div>
                          <ul>{
                            heading.items.map( (item, index) => (
                              <li key={index}>{item.item}</li>
                            ))
                          }
                          </ul>
                        </div>
                      )
                    }
                  </div>

                </div>

              ))
            }

          </div>
        ) : (
          <div><p>Data Not available</p></div>
        )
      }
    </div>
  );
};

export default DropDownSec;
