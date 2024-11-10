/** @format */

import React, { useContext } from "react";
import { functionProviderSwiggy } from "../Context/SwiggyContext";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropDownSec = (props) => {
	const categorie = props.categories;
	// console.log("Inside the DropDown : ", categorie);

	const helpData = props.helpData;
	// console.log(helpData)

	const categorieData = helpData[categorie];
	console.log("Inside the DropDown : ", categorieData);

	const { isOpen, clickDropdown } = useContext(functionProviderSwiggy);

	return (
		<div className="drop_text_container">
			{categorieData ? (
				<div >
					{categorieData.map((heading, index) => (
						<div key={index}>
							<div className="drop_heading_btn" onClick={() => clickDropdown(index)}>
								<div className="heading_h">
									<h2>{heading.heading}</h2>
								</div>
								<div>
									<p>
										{isOpen === index ? (
											<MdArrowDropUp />
										) : (
											<MdOutlineArrowDropDown />
										)}
									</p>
								</div>
							</div>

							<div>
								{isOpen === index && (
									<div>
										<ul  className="drop_item">
											{heading.items.map((item, index) => (
												<li key={index}>{item.item}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			) : (
				<div>
					<p>Data Not available</p>
				</div>
			)}
		</div>
	);
};

export default DropDownSec;
