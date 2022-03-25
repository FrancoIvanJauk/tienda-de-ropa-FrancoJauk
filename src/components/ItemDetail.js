import React from "react";
import { buzo } from "./ItemList";
import imgBuzo from "./img/Buzos/imgBuzo.jpeg";
import "./ItemDetail.css";
import ItemCount from './ItemCount';



const talle = buzo.map((elemento)=> `Buzo Talle: ${elemento.talle}`)                                     
const color = buzo.map((elemento)=> `Buzo Talle: ${elemento.color}`)                                   
const disponibles = buzo.map((elemento)=> `Buzo Talle: ${elemento.disponibles}`)    
const costo = buzo.map((elemento)=> `Cuesta: ${elemento.costo}`)    


function ItemDetail(){

    return(
        
        <div className="ItemDetailBox">
            <img className="imgItemDetail" src={imgBuzo}></img>
            <div className="infoProducto">
                <h2>Producto</h2>
                <p className="letras">{talle}</p>
                <p className="letras">{color}</p>
                <p className="letras">{disponibles}</p>
                <p className="letras">{costo}</p>
                <div className="ItemCount">
                <ItemCount/>
                </div>
            </div>


        </div>
        

    )
}

export default ItemDetail