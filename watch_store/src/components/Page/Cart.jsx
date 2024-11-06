import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UpdateCartproduct } from '../ContextApi/UpdateCartproduction';
import { useState } from 'react';

const Cart = () => {

  const { cartItem, removeCart, updateQuantity, clearCart, getTotalCartPrice} = useContext(UpdateCartproduct);

  const [selectColor, setSelectColor] = useState("Black");

  const handleChange = (event, productId) => {
    const value = Math.max(1, event.target.value);
    updateQuantity(productId, value);
  };


  function colorChange(color) {
    setSelectColor(color)
  }

  return (
    <div>

      <div>
        <h1>Your Cart</h1>
      </div>

      <div>
        {
          cartItem.length === 0 ? (
            <div>
              <p>Your Cart Empty</p>

              <NavLink>Continue Shoping</NavLink>
            </div>
          ) : (
            <>
              {
                cartItem.map((item) => (
                  <div key={item.id}>
                    <div>
                      <img src={item.imgUrl} alt={item.title} />
                    </div>

                    <div>

                      <h3>{item.title}</h3>
                      <p>${item.price}</p>


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
                          value={item.quantity}
                          onChange={(event) => handleChange(event, item.id)}
                          min="1"
                          style={{
                            width: '80px',
                            height: '40px',
                            textAlign: 'center',
                          }}

                        />
                      </div>

                      <p>Total Price: ${item.totalPrice}</p>

                      <button onClick={() => removeCart(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}


              <div>
                <h3>Total Prices : ${getTotalCartPrice()}</h3>
              </div>

              <div>
                <button onClick={clearCart}>Clear Cart</button>
              </div>
            </>

          )}


      </div>


    </div>
  )
}

export default Cart