import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const CartWidget = (props) => {
    
    return(
        <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} class="cart-icon" />
        <div className="qty-display ">0</div>
        </div>
        )
    }
    
    export default CartWidget;