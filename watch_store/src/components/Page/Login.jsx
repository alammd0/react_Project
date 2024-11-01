import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [loginData, setLoginData] = useState({

    email: "",
    password: "",

  })


  function clickHandler(event) {
    // console.log(event.target.value);
    // setLoginData(event.target.value);
    const { name, value } = event.target;

    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoginData(loginData);
    console.log("printing The data....");
    console.log(loginData);
    setLoginData({ email: '', password: '' });
  }

  return (
    <div className='login_Wrapper'>
      <div className='login_container'>
      
        <div className='login_content'>

          <div className='login_content_right'>

            <div className='heading_login'>
              <h2>WellCome Back</h2>
              <p>Fill Your Detail, Go to Main Page</p>
            </div>


            <form className='login_form' onSubmit={submitHandler}>
              <div className='input'>
                <label htmlFor='email'>Email </label>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  name='email'
                  id='email'
                  value={loginData.email}
                  onChange={clickHandler}
                />
              </div>

              <div className='input'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  id='password'
                  value={loginData.password}
                  onChange={clickHandler}
                />
              </div>

              <NavLink to="" className='forget_password'>Forget Password</NavLink>

              <button className='sign_btn'>Sign In</button>
            </form>

            <div className='or_btn'>
              <div className='line'></div>
              <div>Or</div>
              <div className='line'></div>
            </div>

            <div>
              <NavLink className='sign_btn google'><FaGoogle /> Sign in with Google</NavLink>
            </div>


            <div className='other_page'>
              <p>Don't have an account ? </p>
              <NavLink className="other_page_to" to="/signup">Sign Up</NavLink>
            </div>

          </div>

          <div className='login_content_left'>
            <img src='https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hello' />
          </div>



        </div>

      </div>
    </div>
  )
}

export default Login