import Item from "../Item"
import './styles.css'

const ItemList = ({products}) => {
    return (
        <div  className="container">
            {products.map( prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList