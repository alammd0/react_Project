/** @format */

import React from "react";
import { burgerDetRest } from "../../Data/detailFood";
import { FaStar } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const DetailsFood = ({ category, addCartItem, cartItem }) => {
	const filterDetails = burgerDetRest.filter((tag) =>
		tag.name.toLowerCase().includes((category || "").toLowerCase())
	);

	console.log(cartItem);

	return (
		<div className="foodDetail_container">
			{filterDetails.map((data, index) => {
				const isIntcnt = cartItem.some((item) => item.id === data.id);

				return (
					<div className="foodDetails_card" key={index}>
						<div className="foodDetails_card_upper">
							<div className="foodDetails_card_text">
								<p className="heading">
									{data.by}{" "}
									<span className="icon_next">
										<GrFormNextLink />
									</span>{" "}
								</p>
								<p className="rating_color start_rating">
									<span>
										<FaStar />
									</span>{" "}
									{data.rating} . {data.time} mins
								</p>
							</div>
						</div>

						<div className="foodDetails_card_buttom">
							<div className="foodDetails_card_button_title">
								<h2>{data.title}</h2>
								<p className="prices_btn">
									₹ <span>{data.price}</span>
								</p>
							</div>

							<div className="foodDetails_card_buttom_img">
								<img src={data.url} alt={data.title} />
								<button
									className={`${isIntcnt ? "add_btn_check" : "add_btn_img"}`}
									onClick={() => {
										if (!isIntcnt) addCartItem(data);
									}}>
									{isIntcnt ? (
										<Link
											to="/cart"
											style={{ textDecoration: "none", color: "black" }}>
											Checkout
										</Link>
									) : (
										"Add"
									)}
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DetailsFood;
