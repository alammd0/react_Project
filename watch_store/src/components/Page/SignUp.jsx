import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup_wrapper'>
      <div className='signup_container'>
        <div className='signup_contain'>
          <div className='signup_contain_left'>
            <div>
              <h2>Create Our Account For Explore More</h2>
              <p>Please fill All information Carefully</p>
            </div>

            <div>
              <form>
                <div>
                  <label>Name </label>
                  <input type='text'></input>
                </div>

                <div>
                  <label>Email </label>
                  <input type='email'></input>
                </div>

                <div>
                  <label>Username</label>
                  <input type='text'></input>
                </div>

                <div>
                  <label>Password </label>
                  <div>
                    <input type='password'></input>
                  </div>

                </div>

                <div>
                  <label>Confrom Password</label>
                  <div>
                    <input type='password'></input>
                  </div>
                </div>


                <button>Sign Up</button>
              </form>

              <p>Already Account? <NavLink to="/login">Log In</NavLink> </p>
            </div>
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' height="425" alt='no availabe' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp