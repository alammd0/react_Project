/** @format */

import React from "react";
import Filter from "../Filter";
import "./Offers.css";
import OfferCard from "./OfferCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import BestPlaces from "../Home/BestPlaces";
import NearMe from "../Home/NearMe";
import Footer from "../Footer/Footer";

const Offers = () => {
	const fullContent = (
		<>
			Get ready for a scrumptious adventure filled with unbeatable offers on
			your favourite foods and restaurants. Whether you're in the mood for a
			cheesy pizza, a sizzling burger, or a delightful bowl of pasta, now is the
			perfect time to satisfy your cravings while saving big. <br></br> <br />
			All the top-rated restaurants and popular eateries are rolling out
			enticing deals and discounts that are too good to resist. From
			mouthwatering buy-one-get-one-free offers to irresistible combo meals,
			there's something for everyone on Swiggy to relish without breaking the
			bank. <br></br> <br />
			Imagine biting onto a juicy burger paired with a side of crispy fries, all
			at a fraction of the regular price. Or how about treating yourself to a
			cheesy, oven-fresh pizza with your favourite toppings without worrying
			about the bill? With these incredible offers, indulging in your beloved
			dishes has never been more budget-friendly. <br></br> <br />
			So, whether you're planning a cosy night in, a family feast, or a fun
			dinner with friends, take advantage of these fantastic deals. It's time to
			savour the flavours you adore without emptying your wallet. Order now,
			support your local restaurants, and make every meal a delightful and
			cost-effective experience. Don't miss out – let your taste buds rejoice,
			and your savings grow with these irresistible food offers on Swiggy!
		</>
	);

	const truncatedContent = (
		<>
			Get ready for a scrumptious adventure filled with unbeatable offers on
			your favourite foods and restaurants. Whether you're in the mood for a
			cheesy pizza, a sizzling burger, or a delightful bowl of pasta, now is the
			perfect time to satisfy your cravings while saving big. <br />
			<br />
			All the top-rated restaurants and popular eateries are rolling out
			enticing deals and discounts that are too good to resist. From
			mouthwatering buy-one-get...
		</>
	);

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div>
			<div className="Offer_Container">
				<div className="heading_container_offer">
					<h2>Restaurants With Great Offers Near Me</h2>

					<Filter />
				</div>

				<div>
					<OfferCard />

					<div className="show_More_btn_offer">
						<Link className="button" to="/">
							Show More
						</Link>
					</div>
					<hr></hr>
				</div>

				<div className="offer_container">
					<h2>Get the best offers on the food from top restaurants near you</h2>

					<p>{isExpanded ? fullContent : truncatedContent}</p>
					<span onClick={toggleReadMore} className="read-more-btn">
						{isExpanded ? "Read Less" : "Read More"}
					</span>
				</div>

    
                
                <div>
                    <BestPlaces/>
                </div>

                <div className="near_wrapper_content">
                    <NearMe/>
                </div>
			</div>

            <div className="footer_container_offer">
                <Footer/>
            </div>
		</div>
	);
};

export default Offers;
