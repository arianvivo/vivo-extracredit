import React from "react";
import cart from './assets/cart.svg'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import  './styles.css'

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' style={{display: {totalQuantity} > 0 ? 'block' : 'none'}}>
            <div className="widget-container">
                <img src={cart} className="cart-widget" alt="cart-widget" />
                { totalQuantity }
            </div>
        </Link>
    )
}

export default CartWidget