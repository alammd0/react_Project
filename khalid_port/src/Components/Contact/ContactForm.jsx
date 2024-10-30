import { event } from 'jquery'
import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })


    function changeHandle(e) {
        console.log(e.target.value)
    }

    return (
        <div className='contact_from_container'>
            <h2>Pleased to Meet You</h2>

            <form className='from_data'>
                <div className='input'>
                    <input
                        type='text'
                        placeholder='Your Name'
                        id='name'
                        name="name"
                        value={formData.name}
                        onChange={changeHandle}
                    />
                </div>

                <div className='input'>
                    <input
                        type='email'
                        placeholder='Your Email'
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={changeHandle} />
                </div>

                <div className='input'>
                    <input
                        type='text'
                        placeholder='subject'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={changeHandle}
                    />
                </div>

                <div className='input'>
                    <textarea
                        placeholder='Enter your Message'
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={changeHandle}
                        rows="10"
                        cols="30"
                    ></textarea>
                </div>

                <div className='btn'>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
