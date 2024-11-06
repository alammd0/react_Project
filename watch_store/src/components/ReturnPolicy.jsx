import React, { useState } from 'react'

const ReturnPolicy = () => {
    const [Question, setQuestion] = useState('')

    

    function clickHandler(event) {
        const value = event.target.value; 
        console.log(value); 
        setQuestion(value); 
    }

    function submitHandler(event) {
        event.preventDefault(); 
        console.log(Question); 
    }
    

    return (
        <div className='return_container'>

            <div className='return_right'>
                <h3 className='return_heading'>RETURN AND REFUND POLICY : </h3>

                <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            </div>

            <div className='return_left'>
                <form className='form_data' onSubmit={submitHandler}>

                    <input
                        type='text'
                        placeholder='Any Question ?'
                        required
                        name='message'
                        id='message'
                        value={Question}
                        onChange={clickHandler}
                    ></input>


                    <button>Send</button>
                </form>
            </div>

        </div>
    )
}

export default ReturnPolicy