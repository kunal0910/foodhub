import React from 'react'
import image from '../placed.png'
import './Cart.css'

function Cart(props) {
    return (
        <>
         <div className="order_summary">Your Order placed Successfully.</div> 
         <div className="order_summary">Arriving in <b>30 mins</b></div>

         <img src={image} alt="Orderimage" className="order_img"></img>
        </>
    )
}

export default Cart
