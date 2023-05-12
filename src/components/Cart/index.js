import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import './styles.css'

const Cart = () => {

    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext);


    if (totalQuantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div className="cartWrapper">
            {cart.map(p => <CartItem key={p.id} {...p}/>) }

            {console.log("Checking cart: " + cart)}

            <h3>Total: ${totalPrice}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )

}

export default Cart