import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({ cart: []})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [totalQuantity, setTotalQuantity] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect ( () => {
        console.log("Carrito actualizado: " + totalQuantity)
    }, [totalQuantity]) 

    useEffect ( () => {
        let total = 0
        cart.map( prod => {
          total += (prod.price * prod.quantity) 
        })
          setTotalPrice(total)
    }, [cart])

    const addItem = (item, quantity) => {

        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
            setTotalQuantity(prev => prev + quantity)
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
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}