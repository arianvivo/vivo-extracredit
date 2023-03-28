import React from "react";
import cart from './assets/cart.svg'
import  './styles.css'

const CartWidget = () => {
    return(
        <div className="widget-container">
            <img src={cart} className="cart-widget" alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget