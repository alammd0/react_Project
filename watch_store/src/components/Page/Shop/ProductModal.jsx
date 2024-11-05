import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {

    console.log("Modal Data : ", product)

    const [selectColor, setSelectColor] = useState("Black");

    function colorChange(color) {
        setSelectColor(color)
    }


    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        const value = Math.max(1, event.target.value);
        setQuantity(value);
    };

    return (
        <div className='modal_wrapper' >
            <div className='modal-content' onClick={onClose}>

                <div className='cross_btn'>
                    <span><RxCross2 /></span>
                </div>

                <div className='modal_main_content'>

                    <div className='main_content'>
                        <img src={product.imgUrl} alt='Not Image' />
                    </div>

                    <div>
                        <div>
                            <h2>{product.title}</h2>
                            <p>$ {product.price}</p>
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


                        <div>
                            <NavLink to = {product.path}>View Detail</NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductModal