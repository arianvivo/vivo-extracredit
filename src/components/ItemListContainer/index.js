import "./styles.css";
import ItemList from "../ItemList";
import getProducts from '../../asyncMock.js'
import { getProductsByCategory } from "../../asyncMock.js";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    useEffect (() => {

        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'),where ('category', '==', categoryId))
            : collection(db, 'products')

        getDocs (collectionRef)
            .then(response => {
                const productAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productAdapted)
            })
            .catch(err => { console.error(err) } )
            .finally(() => {setLoading(false); console.log("Products:",);console.log(products)})


    }, [categoryId])


    return(
        <div>
            <h1> {greeting}</h1>
            { loading ? <div className="loading">Loading...</div> : <ItemList products={products}/> }
            
        </div>
    )
}

export default ItemListContainer;