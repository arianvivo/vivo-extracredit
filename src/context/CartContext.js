import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({ cart: []})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect( () => { 
        setTotalQuantity(cart.length)
    }, [cart] )

    useEffect( () =>{
        console.log("Cambio totalQuantity: " + totalQuantity)
    }, [totalQuantity])

    const addItem = (item, quantity) => {

        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
            console.log("Valor de carrito:")
            console.log(cart)

        } else {
            console.log("Error: El producto ya fué agregado")
        }

    }

    const removeItem = (itemId) => {

        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)

    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}