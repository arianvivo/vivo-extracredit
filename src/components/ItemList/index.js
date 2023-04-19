import Item from "../Item"
import './styles.css'

const ItemList = ({products}) => {
    console.log("ITEMLIST PRODUCTS:")
    console.log(products)
    console.log("================")
    return (
        <div  className="container">
            {products.map( prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList