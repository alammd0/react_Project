import React, { useState } from 'react'

const From = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    adress: '',
    city: '',
    state: '',
    country: ''
  });


  console.log(formData.firstName)

  function clickHandler(event, prev){
    setFormData( prev => {
      return{
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  function submitData(event){
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div>

      <div>
        <h2>College Registration From</h2>

        <form onSubmit={submitData}>
          <fieldset>
            <legend>Persnol Information - Student Information </legend>

            <div>
              <label htmlFor='firstName'>First Name : </label>
              <input
                type="text"
                placeholder='Enter your first name'
                id='firstName'
                name = 'firstName'
                value={formData.firstName}
                onChange={clickHandler}
              />
            </div>

            <br></br>

            <div>
              <label htmlFor='lastName'>Last Name : </label>
              <input 
              type='text'
              placeholder='Enter you last Name'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={clickHandler}
               />
            </div>

            <br></br>

            <div>
              <label htmlFor='email'> Email : </label>
              <input 
              type='email'
              placeholder='Enter email address'
              id='email'
              name='email'
              value={formData.email}
              onChange={clickHandler}
               />
            </div>

            <br />

            <div>
              <label> Date of Birth : </label>
              <input 
              type='number'
              placeholder='dd/mm/yyyy'
              id='dob'
              name='dob'
              value={formData.dob}
              onChange={clickHandler}
               />
            </div>

            <br></br>
            <div>
              <label htmlFor='adress'> Adress : </label>
              <input 
              type='tex'
              placeholder='Adress'
              id='adress'
              name='adress'
              value={formData.adress}
              onChange={clickHandler}
               />
            </div>

            {/* <br></br>
            <div>
              <label>city : </label>
              <input type='text' />
            </div>

            <br></br>

            <div>
              <label>State : </label>
              <input type='text' />
            </div>

            <br></br>

            <div>
              <label>Country : </label>
              <input type='text'></input>
            </div> */}

          </fieldset>

          <br></br>
          <button>Submit</button>
        </form>

      </div>


    </div>
  )
}

export default From