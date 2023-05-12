import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"
import './styles.css'
import { useContext, useState } from "react"

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantity] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price, img
        }
        addItem(item,quantity)
    }

    return (
        
        <article className="item-detail-container">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
            <p>
                Precio: ${price}
            </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <div className="finish-purchase-container">
                            <Link to ="/cart" className="finish-purchase">Terminar compra</Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;