import './styles.css'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from 'bootstrap';


const Checkout = ({props}) => {

    const {cart, totalQuantity, totalPrice} = useContext(CartContext);
    
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
                <button>Proceder con la compra</button>
        </div>
        )
    }
    
    export default Checkout;