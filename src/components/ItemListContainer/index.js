import "./styles.css";
import ItemList from "../ItemList";
import getProducts from '../../asyncMock.js'
import { getProductsByCategory } from "../../asyncMock.js";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    console.log(products)

    const {categoryId} = useParams()

    useEffect (() => {

        const asyncFunc = categoryId ?  getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })

    }, [categoryId])

    return(
        <div>
            <h1> {greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;