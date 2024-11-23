/** @format */

import React from "react";
import "./Hero.css"

const Hero = () => {
	return (
		<div className="hero_wrapper">
			<div className="Text_Container">
				<div className="markating_container">
					<p className="subtitle">MARKETERS SINCE 2003</p>
					<div className="horiz_line"></div>
				</div>
				<div className="heading_text_container">
					<h1>
						Born <br></br>
						Industrial <br />
						<span>
							Raised
							<br />
							Digital
						</span>
					</h1>
				</div>
			</div>

			<div>
				<button className="hero_btn">Talk to an expert</button>
			</div>
		</div>
	);
};

export default Hero;
