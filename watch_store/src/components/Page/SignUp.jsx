import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const [signUpData, setSignUpdata] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });


  function clickHandlers(event) {
    const { name, value } = event.target;
    setSignUpdata(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function submitHandler(event) {
    event.preventDefault();
    // setSignUpdata(signUpData);
    console.log("Printing Data");
    console.log(signUpData);
    navigate("/home");
    setSignUpdata({
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    })
  }


  function togglepassVisiblity(field) {
    setShowPassword(prevPass => ({
      ...prevPass,
      [field]: !prevPass[field]
    }))
  }

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
              <form onSubmit={submitHandler} className='login_form'>
                <div className='input'>
                  <label htmlFor='name'>Name </label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    onChange={clickHandlers}
                    value={signUpData.name}
                    id='name'
                  ></input>
                </div>

                <div className='input'>
                  <label htmlFor='email'>Email </label>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    id='email'
                    name='email'
                    onChange={clickHandlers}
                    value={signUpData.email}
                  ></input>
                </div>

                <div className='input'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    placeholder='Create username'
                    id='username'
                    name='username'
                    onChange={clickHandlers}
                    value={signUpData.username}
                  ></input>
                </div>

                <div className='input check_paword'>
                  <label htmlFor='password'>Password </label>
                  <div className='password'>
                    <input
                      type={showPassword.password ? 'text' : 'password'}
                      placeholder='Create a new password'
                      id='password'
                      onChange={clickHandlers}
                      name='password'
                      value={signUpData.password}
                    ></input>
                    <span onClick={() => togglepassVisiblity('password')}> {
                      showPassword.password ? <IoEyeOutline /> : <IoEyeOffSharp />
                    } </span>
                  </div>

                </div>

                <div className='input conf_password'>
                  <label htmlFor='confirmpassword'>Confrom Password</label>
                  <div className='password'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Repeat Password'
                      value={signUpData.confirmPassword}
                      name='confirmPassword'
                      onChange={clickHandlers}
                      id='confirmpassword'
                    ></input>
                    <span onClick={() => togglepassVisiblity('confirmPassword')}> 
                      { showPassword.confirmPassword ? <IoEyeOutline /> : <IoEyeOffSharp />}
                     </span>
                  </div>
                </div>


                <button className='sign_btn'>Sign Up</button>
              </form>

              <p className='other_page'>Already Account? <NavLink className="other_page_to" to="/login">Log In</NavLink> </p>
            </div>
          </div>
          <div className='login_content_left sign_content_left'>
            <img src='https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' alt='no availabe' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp