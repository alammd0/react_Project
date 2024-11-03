import React from 'react'

const ReturnPolicy = () => {
    return (
        <div className='return_container'>

            <div className='return_right'>
                <h3 className='return_heading'>RETURN AND REFUND POLICY : </h3>

                <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            </div>

            <div className='return_left'>
                <form className='form_data'>

                    <input
                        type='email'
                        placeholder='Any Question ?'
                    ></input>


                    <button>Send</button>
                </form>
            </div>

        </div>
    )
}

export default ReturnPolicy