import React from 'react'
import Cards from './Cards'
import { ShoppingCart } from '../../../data'
import "./Shop.css"
import Footer from '../../Footer'

const Shop = () => {
  return (

    <div className='shop_card'>
      <div className='shop_card_main_container'>
        <div className='heading'>
          <h2>SHOP</h2>
        </div>
        <div>
          <Cards ShoppingCart={ShoppingCart} 
             
          />
        </div>
      </div>

      <div className='footerSection'>
          <Footer/>
        </div>
    </div>
  )
}

export default Shop