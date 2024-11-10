import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { functionProviderSwiggy } from '../Context/SwiggyContext'
import logo from "../../assets/Swiggy_logo.png"

const SignUpModal = () => {

    const {openSignLoginModal, formData, signLoginHandler} = useContext(functionProviderSwiggy);


    return (
        <div>
            <div>
                <div>
                    <div>
                        <h2>Sign Up</h2>
                        <p>Or <NavLink onClick={() => openSignLoginModal('login')}>Login Your Account</NavLink></p>
                    </div>

                    <div>
                        <img src={logo} alt='not' />
                    </div>
                </div>

                <div>
                    <form>
                        <div>
                            <input 
                            type='text' 
                            placeholder='Phone Number'
                            name='phoneNumber' 
                            value={formData.phoneNumber}
                            onChange={signLoginHandler}
                            required />
                        </div>

                        <div>
                            <input 
                            type='text' 
                            required 
                            placeholder='Name' 
                            onChange={signLoginHandler}
                            value={formData.name}
                            name='name'
                            />
                        </div>

                        <div>
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
                            <button>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal