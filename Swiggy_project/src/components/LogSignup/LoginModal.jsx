import React, { useContext, useState } from 'react'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Swiggy_logo.png"

const LoginModal = () => {

    const { openSignLoginModal, formData, signLoginHandler } = useContext(functionProviderSwiggy);



    return (
        <div>
            <div>

                <div>
                    <div>
                        <h2>Login</h2>
                        <p>Or <NavLink onClick={() => openSignLoginModal('signup')}>Create an account</NavLink></p>
                    </div>
                    <div>
                        <img src={logo} alt='not' />
                    </div>
                </div>


                <div></div>

                <div>
                    <form>

                        <div>
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
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal