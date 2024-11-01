import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup_wrapper login_Wrapper'>
      <div className='signup_container login_container'>
        <div className='signup_contain login_content'>
          <div className='signup_contain_left login_content_right'>
            <div className='heading_login'>
              <h2>Create Our Account</h2>
              <p>Please fill All information Carefully</p>
            </div>

            <div>
              <form className='login_form'>
                <div className='input'>
                  <label>Name </label>
                  <input type='text'></input>
                </div>

                <div className='input'>
                  <label>Email </label>
                  <input type='email'></input>
                </div>

                <div className='input'>
                  <label>Username</label>
                  <input type='text'></input>
                </div>

                <div className='input'>
                  <label>Password </label>
                  <div>
                    <input type='password'></input>
                  </div>

                </div>

                <div className='input'>
                  <label>Confrom Password</label>
                  <div>
                    <input type='password'></input>
                  </div>
                </div>


                <button className='sign_btn'>Sign Up</button>
              </form> 

              <p className='other_page'>Already Account? <NavLink className="other_page_to" to="/login">Log In</NavLink> </p>
            </div>
          </div>
          <div className='login_content_left'>
            <img src='https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' height="425" alt='no availabe' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp