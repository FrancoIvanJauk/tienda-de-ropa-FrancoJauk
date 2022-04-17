import React from "react";
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
        if (cantidad === 1){
            setCantidad(cantidad - 0)
        }
    }


return(
    max === 0 ? <div><p className="sinStock">Sin stock</p></div> :
    <div className="itemCountBox">
        <div className="boxContador">
            <button className="botonContador" onClick={disminuir}>-</button>
            <p className="numeroContador">{cantidad}</p>
            <button className="botonContador" onClick={incrementar}>+</button>
        </div>
        <button className="agregar" onClick={onAdd} >Agregar al carrito</button>
    </div>
)
}



export default ItemCount;