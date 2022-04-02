import React from "react";
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";


function ItemDetail({productDetail}){

    const {nombre, precio, img, disponibles,id } = productDetail

    const [cantidad, setCantidad] = useState(0)

    const agregarAlCarrito = () => {
        const agregar = {
            id,
            nombre,
            precio,
            cantidad
        }
    console.log(agregar)
    }

    return(
        <div className="ItemDetailBox">
            <img className="imgItemDetail" src={img}></img>
            <div className="infoProducto">
                <h2>{nombre}</h2>
                <p className="letras">Prendas Disponibles: {disponibles}</p>
                <p className="letras">Precio: ${precio}</p>
                <div className="ItemCount">
                <ItemCount max={disponibles} onAdd={agregarAlCarrito} cantidad={cantidad} setCantidad={setCantidad}/>
                </div>
            </div>


        </div>
    )
}



export default ItemDetail