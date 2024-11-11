import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import logo from "../../assets/Swiggy_logo.png"
import "./Login.css"

const SignUpModal = () => {

    const { openSignLoginModal, formData, signLoginHandler, closeSignLoginModal } = useContext(functionProviderSwiggy);


    return (
        <div>
            <div>

                <div className='close_btn'>
                    <button className="modal_close_button" onClick={closeSignLoginModal}>&times;</button>
                </div>

                <div  className='login_sign_heading_logo'>
                    <div>
                        <h2>Sign Up</h2>
                        <p>Or <NavLink onClick={() => openSignLoginModal('login')}>Login Your Account</NavLink></p>
                    </div>

                    <div>
                        <img src={logo} alt='not' />
                    </div>
                </div>

                <div>
                    <form className='form_container_login_sign'>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                placeholder='Phone Number'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={signLoginHandler}
                                required />
                        </div>

                        <div className='inputContainer'>
                            <input
                                type='text'
                                required
                                placeholder='Name'
                                onChange={signLoginHandler}
                                value={formData.name}
                                name='name'
                            />
                        </div>

                        <div className='inputContainer'>
                            <input
                                type='email'
                                placeholder='Email Adress'
                                required
                                onChange={signLoginHandler}
                                value={formData.email}
                                name='email'
                            />
                        </div>

                        <div>
                            <button className='login_sign_btn'>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal