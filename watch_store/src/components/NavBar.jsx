import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidLogInCircle } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className='nav_wrapper'>
            <div className='nav_container'>
                <ul className='nav_contain'>
                    <li>
                        <NavLink className="nav_line" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_line" to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_line" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_line" to="/faq">Faq</NavLink>
                    </li>
                    <li> 
                        <NavLink className="nav_line" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_line" id='login' to="/login">
                            <BiSolidLogInCircle />
                            <span>Log in</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_line" to="/cart">
                            <BsCartPlus />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar