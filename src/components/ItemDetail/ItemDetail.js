import React from "react";
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail({productDetail}){
    const {nombre, precio, img, disponibles } = productDetail
    return(
        <div className="ItemDetailBox">
            <img className="imgItemDetail" src={img}></img>
            <div className="infoProducto">
                <h2>{nombre}</h2>
                <p className="letras">Prendas Disponibles: {disponibles}</p>
                <p className="letras">Precio: ${precio}</p>
                <div className="ItemCount">
                <ItemCount/>
                </div>
            </div>


        </div>
    )
}



export default ItemDetail