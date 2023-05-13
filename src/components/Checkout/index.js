import './styles.css'
import Table from 'react-bootstrap/Table';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from 'bootstrap';
import ClientForm from '../ClientForm';
import { addDoc, getDoc, writeBatch, collection, query, where, documentId, getDocs, Timestamp } from 'firebase/firestore';

import { db } from '../../services/firebase/firebaseConfig';


const Checkout = ({props}) => {

    const {cart, totalQuantity, totalPrice, clearCart} = useContext(CartContext);

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const createOrder = async ({nombre, telefono, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {nombre, telefono, email},
                items: cart,
                total: totalPrice,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRefs = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRefs, where(documentId(), 'in', ids))) //////

            const { docs } = productsAddedFromFirestore

            docs.forEach( doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(product => product.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Products out of stock')
            }

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
        

    }

    if (loading) {
        return(
            <h1>Se esta generando su orden...</h1>
        )
    }

    if (orderId) {
        <h1>El ID de su orden es: {orderId}</h1>
    }

    return (
        <div className='checkout-wrapper'>
            Checkout!
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Artículo</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Costo</th>
                    </tr>
                </thead>
                
                <tbody>
                    {cart.map( prod => { 

                        {console.log(prod); console.log(prod.name)}
                        return(                        
                        <tr>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.price * prod.quantity}</td>
                        </tr>  
                        )      
                    }                
                    )}
                </tbody>
            </Table>
                <div>
                    TOTAL: {totalPrice}
                </div>

                <ClientForm onConfirm={createOrder} />

        </div>
        )
    }
    
    export default Checkout;