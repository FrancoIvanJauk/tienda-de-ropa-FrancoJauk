import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";


function Item({producto}){
    return(
        <div className="item">
            <div>
            <Link to={`/detalles/${producto.id}`}><button className="info" id="info">Info</button></Link>
            <p>{producto.nombre}</p>
            <img className="imagen" src={producto.img} alt={producto.nombre}></img>
            
            </div>
        </div>
    )
};




export default Item;

