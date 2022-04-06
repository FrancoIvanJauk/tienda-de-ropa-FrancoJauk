import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import {BsFillTrashFill} from "react-icons/bs"

const Cart = () =>{

    const {cart, cartTotal, vaciarCarrito, borrarItem} = useContext(CartContext)


    return(
    <div className="todosLosItems">

        {
            cart.map((item)=>(
                <div key={item.id}>
                    <div className="items">

                        <h4>{item.nombre}</h4>
    
                        <div className="Compra">

                            <img className="imgCompra" src={item.img}></img>
        
                            <div className="infoCompra">
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por Unidad: {item.precio}</p>
                                <p>Precio Total: {item.precio * item.cantidad}</p>
                                <button className="borrarItem" onClick={() => borrarItem(item.id)}><BsFillTrashFill /></button>
                            </div>
    
                        </div>
                    </div>
                </div>
                
            ))
        }
        <h4 className="total">TOTAL: ${cartTotal()}</h4>
        <button onClick={vaciarCarrito} className="borrar">Vaciar Carrito</button>
    </div>
    )
}

export default Cart