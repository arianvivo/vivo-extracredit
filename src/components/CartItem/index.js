import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import './styles.css'


const CartItem = ({id, name, img, price}) => {

    const {clearCart, removeItem} = useContext(CartContext)

    return (
        <article className="CartItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>

            <section className="ItemFooter">
                <button onClick={() => removeItem(id)}> Quitar </button>
            </section>

        </article>
    )

}

export default CartItem