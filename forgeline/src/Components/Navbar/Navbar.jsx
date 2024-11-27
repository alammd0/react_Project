/** @format */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);


  const location = useLocation();

  const isInsight = location.pathname === "/insight" ; 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <div className={`NavBar_wrapper ${scrolled ? "scrolled" : " "} ${isInsight ? "active-insight" : ""}`}>
      <div className="NavBar_Container">
        <div className="logo">

          <svg
            width="180px"
            height="20px"
            viewBox="0 0 614 95"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient
                x1="16.932%"
                y1="24.7566%"
                x2="34.72%"
                y2="24.7566%"
                id="linearGradient-1">
                <stop stop-color="#DF7E55" offset="0%"></stop>
                <stop stop-color="#DF9D74" offset="100%"></stop>
              </linearGradient>
              <linearGradient
                x1="-0.0449943757%"
                y1="49.9808126%"
                x2="100%"
                y2="49.9808126%"
                id="linearGradient-2">
                <stop stop-color="#DF7E55" offset="0%"></stop>
                <stop stop-color="#DF9D74" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd">
              <g id="logo2">
                <g
                  id="Group"
                  transform="translate(129.000000, 0.000000)"
                  fill="#FAF5E9">
                  <rect
                    id="Rectangle"
                    x="0.4"
                    y="2.8"
                    width="15.3"
                    height="89.9"></rect>
                  <path
                    d="M59.9,48.3 C59.9,51.3 60,54.2 60.1,57.3 C59.9,56.4 59.6,55.6 59.3,54.7 L41,2.8 L24.7,2.8 L24.7,92.7 L38.9,92.7 L38.9,40.5 C38.9,38.6 38.9,36.7 38.8,35 C39.1,36.1 39.5,37.1 39.9,38.3 L58.9,92.7 L74.1,92.7 L74.1,2.8 L59.9,2.8 L59.9,48.3 Z"
                    id="Path"></path>
                  <path
                    d="M98.6,15.1 L103.9,15.1 C112.8,15.1 116.6,21.3 116.6,35.7 L116.6,59.2 C116.6,78.1 109.3,80.3 103.9,80.3 L98.6,80.3 L98.6,15.1 Z M105,2.8 L83.2,2.8 L83.2,92.7 L104.7,92.7 C122.8,92.7 132.4,80.7 132.4,58 L132.4,36.1 C132.5,14 123.3,2.8 105,2.8 Z"
                    id="Shape"
                    fill-rule="nonzero"></path>
                  <path
                    d="M173.1,70.8 C173.1,77.6 170.1,81.3 164.6,81.3 C157.6,81.3 156.1,75.6 156.1,70.8 L156.1,2.8 L140.8,2.8 L140.8,71.5 C140.8,86.1 149.7,94.7 164.7,94.7 C179.3,94.7 188.4,85.8 188.4,71.5 L188.4,2.8 L173.2,2.8 L173.2,70.8 L173.1,70.8 Z"
                    id="Path"></path>
                  <path
                    d="M230.3,44.1 L219.6,37.2 C214.8,34.3 212.9,30.9 212.9,25.6 L212.9,21.4 C212.9,16.4 215.5,13.5 219.8,13.5 C223.3,13.5 227.3,14.8 227.3,24.6 L227.3,33.8 L242.6,30.9 L242.6,23.4 C242.6,8.2 235.1,0.8 219.7,0.8 C205.9,0.8 197.1,9.2 197.1,22.3 L197.1,26.7 C197.1,36.6 200.8,43.3 209.5,48.9 L220,55.5 C226.5,59.7 227.1,62.8 227.1,69.3 L227.1,72.5 C227.1,78.7 224.6,81.9 219.8,81.9 C217.8,81.9 211.9,81.9 211.9,69.4 L211.9,59.1 L196.3,62 L196.3,70.3 C196.3,86.1 204.6,94.8 219.7,94.8 C234.5,94.8 242.9,86.6 242.9,72.3 L242.9,67.6 C242.9,58 240.8,50.8 230.3,44.1"
                    id="Path"></path>
                  <polygon
                    id="Path"
                    points="247.8 16.6 264.9 16.6 264.9 92.7 280 92.7 280 16.6 297 16.6 297 2.8 247.8 2.8"></polygon>
                  <path
                    d="M319.1,14.7 L324.7,14.7 C330.3,14.7 333.7,16.7 333.7,26.7 L333.7,31.8 C333.7,40.9 331.1,44.6 324.8,44.6 L319.1,44.6 L319.1,14.7 Z M349.5,31.4 L349.5,26.5 C349.4,10.6 341.6,2.9 325.6,2.9 L303.8,2.9 L303.8,92.8 L319.1,92.8 L319.1,56 L324.5,56 L335.8,92.7 L352,92.7 L338.9,52.7 C345.8,49.2 349.5,41.9 349.5,31.4 Z"
                    id="Shape"
                    fill-rule="nonzero"></path>
                  <rect
                    id="Rectangle"
                    x="360.9"
                    y="2.8"
                    width="15.3"
                    height="89.9"></rect>
                  <path
                    d="M411.6,24.5 C411.8,26 412.1,27.5 412.3,29.1 L417.2,57 L406,57 L410.9,29.1 C411.2,27.6 411.4,26.1 411.6,24.5 Z M402.3,2.8 L384.3,92.7 L399.8,92.7 L403.9,69.4 L419.4,69.4 L423.5,92.7 L439,92.7 L420.9,2.8 C420.9,2.8 402.3,2.8 402.3,2.8 Z"
                    id="Shape"
                    fill-rule="nonzero"></path>
                  <polygon
                    id="Path"
                    points="462.5 78.6 462.5 2.8 447.1 2.8 447.1 92.7 484.8 92.7 484.8 78.6"></polygon>
                </g>
                <g
                  id="SVGID_1_-link"
                  transform="translate(0.000000, 3.000000)"
                  fill="url(#linearGradient-2)">
                  <polygon
                    id="SVGID_1_"
                    points="65.3 0.5 65.3 81.3 57.3 81.3 57.3 0.5 33 0.5 33 81.3 24.9 81.3 24.9 0.5 0.7 0.5 0.7 89.1 8.7 89.1 8.7 8.5 16.8 8.5 16.8 89.1 41.1 89.1 41.1 8.5 49.2 8.5 49.2 89.1 73.4 89.1 73.4 8.5 81.5 8.5 81.5 89.1 89.6 89.1 89.6 0.5"></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>



        <div className="Navbar_item_container">
          <ul className="Navbar_item">
            <NavLink to='/work' className="item">
              <li>Work</li>
            </NavLink>
            <NavLink className="item" to="/client">
              <li>Clients</li>
            </NavLink>

            <NavLink to="/service" className="item" >
              <li >Services</li>
            </NavLink>

            <NavLink className="item" to="/insight">
              <li >Insights</li>
            </NavLink>

            <NavLink className="item">
              <li >Contact Us</li>
            </NavLink>
          </ul>

          <div>
            <Link className="navbar_requ_btn">
              <button>Request A Consult</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
