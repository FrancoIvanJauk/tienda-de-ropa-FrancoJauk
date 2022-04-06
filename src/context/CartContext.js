import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()



export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

    const agregarItem = (item) =>{
      setCart([...cart, item ])
    }
  
    const limiteCompra=(id)=>{
      return cart.some(prod => prod.id === id)
    }
  
    const cartCantidad = () =>{
      return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }      

    const cartTotal = () =>{
        return cart.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const borrarItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id))
    }

    return(

        <CartContext.Provider 
        value={{cart, agregarItem, limiteCompra, cartCantidad, cartTotal, vaciarCarrito, borrarItem}}>

            {children}

        </CartContext.Provider>
    )
}