import { useState } from "react"
import './styles.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="count-container">
            <div className="count-controls">
                <button onClick={decrement}> - </button>
                <h4>{quantity}</h4>
                <button onClick={increment}> + </button>
            </div>
                <button className="add-to-cart" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
        </div>
    )

}

export default ItemCount