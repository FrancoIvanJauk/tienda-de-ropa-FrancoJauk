import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";

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
                                <button className="borrarItem" onClick={() => borrarItem(item.id)}><BsFillTrashFill/></button>
                            </div>
    
                        </div>
                    </div>
                </div>
                
            ))
        }
        
        {
            cartTotal() === 0 ? <h4 className="sinProductosTitulo">No tiene productos seleccionados</h4>
             : <h4 className="total">TOTAL: ${cartTotal()}</h4> 
        }
        {
            cartTotal() === 0 ? <Link to="/todo"><button className="verProductos">Ver Productos</button></Link>
             : <button onClick={vaciarCarrito} className="borrar">Vaciar Carrito</button>
        }
        {
            cartTotal() > 0 && <Link to='/checkout'><button className="comprar">Comprar</button></Link>
        }
    </div>
    )
}

export default Cart