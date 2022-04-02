import React from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

function ItemCount({max, onAdd, cantidad, setCantidad}){



    const incrementar = () => {
        setCantidad(cantidad + 1)
        if (cantidad === max){
            setCantidad(cantidad + 0)
        }
    }

    const disminuir = () => {
        setCantidad(cantidad - 1)
        if (cantidad === 0){
            setCantidad(cantidad - 0)
        }
    }

return(
    <div className="itemCountBox">
        <div className="boxContador">
            <button className="botonContador" onClick={disminuir}>-</button>
            <p className="numeroContador">{cantidad}</p>
            <button className="botonContador" onClick={incrementar}>+</button>
        </div>
        <button className="agregar" onClick={onAdd} >Agregar al carrito</button>
        <Link to={"/Cart"}><button className="agregar">Terminar Compra</button></Link>
    </div>
)
}



export default ItemCount;