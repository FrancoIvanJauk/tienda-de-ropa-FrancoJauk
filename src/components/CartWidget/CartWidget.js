import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {BsCart3} from "react-icons/bs";
import { DropdownButton } from "react-bootstrap";
import {BsFillTrashFill} from "react-icons/bs"

const CartWidget = () =>{

    const {cart, borrarItem, cartTotal} = useContext(CartContext)

    const {cartCantidad} = useContext(CartContext)

    return(
        <>
        <Link className="botonyCarrito" to="/Cart"><button className="botonCarrito"><BsCart3 className="carrito"/></button>
        <span className="numero">{cartCantidad()}</span>
        </Link>
        <DropdownButton className="downButtonCompra" drop={"down"} >
        {
            cart.map((item)=>(
                <div key={item.id} >
                    <div className="itemsDownButtom">

                        <button className="borrarItemDownButton" onClick={() => borrarItem(item.id)}><BsFillTrashFill /></button>
                        
                        <h4 className="tituloDownButton">{item.nombre}</h4>

                        <div className="CompraDownButton">

                            <img className="imgDownButton" src={item.img}></img>
        
                            <div className="infoCompraDownButton">
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por Unidad: {item.precio}</p>
                                <p>Precio Total: {item.precio * item.cantidad}</p>
                            </div>
    
                        </div>
                    </div>
                </div>
                
            ))
        }

        {
            cartTotal() === 0 ? <h5>No tiene productos seleccionados</h5>
             : <Link to="/Cart"><button className="terminarCompraDownButton">Terminar Compra</button></Link>
        }
        </DropdownButton>

        </>
    )
}

export default CartWidget