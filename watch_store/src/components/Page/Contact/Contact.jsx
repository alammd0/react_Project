import React, { useState } from 'react'
import "./Contact.css"
import Footer from '../../Footer'

const Contact = () => {

  const [formData, setformData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    subject: '',
    message: ''
  })

  function clickHandler(event) {
    console.log(event.target.value)
    const { name, value } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: value
    }))
  };


  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    setformData(formData);


    setformData({
      firstName: '',
      secondName: '',
      email: '',
      subject: '',
      message: ''
    })
    
  }




  return (
    <div className='contact_wrapper'>
      <div className='contact_tranner'>
        <div className='contact_content'>

          <div className='contact_heading'>
            <h2>Contact</h2>
          </div>

          <div>
            <form className='form_data_contact' onSubmit={submitHandler}>

              <div className='first_Name'>

                <div className='contact_int'>
                  <label htmlFor='firstName' id='cont_txt'>First name :</label>
                  <input
                    className='cont_input'
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    id='firstName'
                    onChange={clickHandler}
                    value={formData.firstName}
                  />
                </div>

                <div className='contact_int'>
                  <label htmlFor='secondName' id='cont_txt'>Last Name :</label>
                  <input
                    className='cont_input'
                    type='text'
                    name='secondName'
                    id='secondName'
                    placeholder='Last Name'
                    onChange={clickHandler}
                    value={formData.secondName}
                  />
                </div>

              </div>

              <div className='email contact_int'>
                <label htmlFor='email' id='cont_txt'>Email :</label>
                <input
                  className='cont_input'
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  id='email'
                  onChange={clickHandler}
                  value={FormData.email}
                ></input>
              </div>

              <div className='contact_int'>
                <label htmlFor='subject' id='cont_txt'>Subject :</label>
                <input
                  className='cont_input'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  id='subject'
                  onChange={clickHandler}
                  value={FormData.subject}
                />
              </div>

              <div className='contact_int'>
                <label htmlFor='message' id='cont_txt'>Message :</label>
                <textarea
                  cols="4" rows="8"
                  className='cont_input'
                  name='message'
                  placeholder='Enter Your Message'
                  id='message'
                  onChange={clickHandler}
                  value={formData.message}

                ></textarea>
              </div>

              <button className='contact_btn'>Submit</button>

            </form>
          </div>

        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact