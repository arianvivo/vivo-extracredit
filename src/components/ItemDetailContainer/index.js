import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, 'products', itemId)
        
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id : response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(err => {
                 console.error(err)
                })
            .finally(() => { 
                setLoading(false)
                console.log(product)
            })

    }, [itemId])


    return (
        <div>
            { loading ? <div className="loading">Loading...</div> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer