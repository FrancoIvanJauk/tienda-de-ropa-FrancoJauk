import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {BsFillCartFill} from "react-icons/bs";
import { DropdownButton } from "react-bootstrap";
import {BsFillTrashFill} from "react-icons/bs"

const CartWidget = () =>{

    const {cart, borrarItem} = useContext(CartContext)

    const {cartCantidad} = useContext(CartContext)

    return(
        <>
        <Link className="botonyCarrito" to="/Cart"><button className="botonCarrito"><BsFillCartFill className="carrito"/></button>
        <span className="numero">{cartCantidad()}</span>
        </Link>

        <DropdownButton drop={"start"}>
        {
            cart.map((item)=>(
                <div key={item.id}>
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

        <Link to="/Cart"><button className="CompraDownButton">Terminar Compra</button></Link>
        </DropdownButton>

        </>
    )
}

export default CartWidget