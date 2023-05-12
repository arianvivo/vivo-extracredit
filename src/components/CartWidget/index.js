import React from "react";
import cart from './assets/cart.svg'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import  './styles.css'

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className="cart-link">
            <div className="widget-container"style={{display:  totalQuantity  > 0 ? 'block' : 'none'}}>
                <img src={cart} className="cart-widget" alt="cart-widget" />
                <div className="quantity-counter">{ totalQuantity }</div>
            </div>
        </Link>
    )
}

export default CartWidget