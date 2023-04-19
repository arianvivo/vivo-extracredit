import ItemCount from "../ItemCount"
import './styles.css'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;