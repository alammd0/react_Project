import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import logo from "../../assets/Swiggy_logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoMdHome } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import "./NavBar.css"

const NavBar = () => {

    const [isMenu, setIsmenu] = useState(false);


    function clickHandler() {
        setIsmenu(!isMenu);
    }


    return (
        <div className='navBar_wrapper'>
            <div className='navBar_container'>

                <div>
                    <img src={logo} alt='Undefined' />
                </div>


                <div>
                    <ul className={`nav_text ${isMenu ? 'menu' : ''}`} >
                        <li>
                            <NavLink className="text" to="/">
                                <IoMdHome />
                                <span>Home</span></NavLink>
                        </li>

                        <li>
                            <NavLink className="text" to="/search">
                                <CiSearch />
                                <span>Search</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="text" to="/offer">
                                <BiSolidOffer />
                                <span>Offers</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="text" to="/help">
                                <IoIosHelpBuoy />
                                <span>Help</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="text" to="/signin">
                                <RiLoginCircleLine />
                                <span>Sign In</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="text" to="/cart">
                                <RiLoginCircleLine />
                                <span>Cart</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className='toggle' onClick={clickHandler}>
                {
                    !isMenu ? (<TiThMenu />) : (<TiThMenuOutline />)
                }
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar