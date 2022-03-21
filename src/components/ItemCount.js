import React, {useState} from "react";
import "./ItemCount.css"

function ItemCount(){

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
        if (contador == 5){
            setContador(contador + 0)
        }
    }

    const disminuir = () => {
        setContador(contador - 1)
        if (contador == 0){
            setContador(contador - 0)
        }
    }

return(
    <div className="itemCountBox">
        <div className="boxContador">
            <button className="botonContador" onClick={disminuir}>-</button>
            <p className="numeroContador">{contador}</p>
            <button className="botonContador" onClick={incrementar}>+</button>
        </div>
        <button className="agregar" >Agregar al carrito</button>
    </div>
)
}



export default ItemCount;