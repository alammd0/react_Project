import React, { useState } from 'react'
import "./BlackJet.css"
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer';
import ReturnPolicy from '../../ReturnPolicy';

const Details = (props) => {

    const details = props.details;

    console.log(details)

    const [selectColor, setSelectColor] = useState("Black");



    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        const value = Math.max(1, event.target.value);
        setQuantity(value);
    };

    function colorChange(color) {
        setSelectColor(color)
    }


    return (
        <div className="blackjet_wrapper">
            <h2>{details.path}</h2>

            <div className='black_product_cont'>

                <div className='black_product_right'>
                    <img src={details.imgUrl} alt='not' />


                    <p>{details.desc}</p>
                </div>

                <div className='black_product_left'>
                    <div className='clack_product_left_heading'>
                        <h3>{details.title}</h3>
                        <p>{details.code}</p>
                    </div>

                    <div className='color_picker'>

                        <p>Color : <span style={{
                            color: selectColor === "Red" ? 'red' : 'black',
                            fontSize: '1rem', fontWeight: '700'
                        }}>{selectColor}</span> </p>

                        <div className='color'>
                            <div className='color_red' onClick={() => colorChange("Red")}></div>
                            <div className='color_black' onClick={() => colorChange("Black")}></div>
                        </div>
                    </div>


                    <div className='input_black input'>
                        <p>Quantity:</p>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                            min="1"
                            style={{
                                width: '80px',
                                height: '40px',
                                textAlign: 'center',
                            }}
                        />
                    </div>

                    <div className='black_btn'>
                        <NavLink to="/cart" className="btn" >Add Cart</NavLink>
                    </div>

                    <div className='product_info'>
                        <p className='heading_info'>PRODUCT INFO</p>
                        <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                    </div>
                </div>

            </div>




            <div className='return_Policy'>
                <ReturnPolicy />
            </div>

            <div style={{
                marginTop: "1.25rem"
            }}>
                <Footer />
            </div>
        </div>
    )
}

export default Details