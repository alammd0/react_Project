import React, { useContext, useState } from 'react'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Swiggy_logo.png"
import "./Login.css"


const LoginModal = () => {

    const { openSignLoginModal, formData, signLoginHandler, closeSignLoginModal } = useContext(functionProviderSwiggy);



    return (
        <div className='login_wrapper'>
            <div className='login_container'>

                <div className='close_btn'>
                    <button className="modal_close_button" onClick={closeSignLoginModal}>&times;</button>
                </div>

                <div className='login_sign_heading_logo'>
                    <div className='login_sign_heading'>
                        <h2>Login</h2>
                        <p>Or <NavLink onClick={() => openSignLoginModal('signup')}>Create an account</NavLink></p>
                    </div>
                    <div>
                        <img src={logo} alt='not' />
                    </div>
                </div>

                <div></div>

                <div>
                    <form className='form_container_login_sign'>

                        <div className='inputContainer'>
                            <input
                                type="text"
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                required
                                onChange={signLoginHandler}
                                placeholder='Phone Number'
                            />
                        </div>

                        <div>
                            <button className='login_sign_btn'>Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginModal