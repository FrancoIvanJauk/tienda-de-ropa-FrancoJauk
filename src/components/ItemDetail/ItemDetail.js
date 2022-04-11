import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";


function ItemDetail({productDetail}){
    const {nombre, precio, img, disponibles,id } = productDetail

    const {cart, agregarItem, limiteCompra} = useContext(CartContext)
    console.log(cart)


    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = () => {
        const agregar = {
            id,
            nombre,
            precio,
            cantidad,
            img
        }

        agregarItem(agregar)
    }

    return(
        <div className="ItemDetailBox">
            <img className="imgItemDetail" src={img}></img>
            <div className="infoProducto">
                <h2>{nombre}</h2>
                <p className="letras">Prendas Disponibles: {disponibles}</p>
                <p className="letras">Precio: ${precio}</p>
                <div className="ItemCount">

                {
                    !limiteCompra(id) ? 
                    <ItemCount max={disponibles} onAdd={agregarAlCarrito} cantidad={cantidad} setCantidad={setCantidad}/>
                    : <Link to="/todo"><button className="botones">Ver mas productos</button></Link>
                }


                {
                    limiteCompra(id) && <Link to={"/Cart"}><button className="botones">Terminar Compra</button></Link>
                }

                </div>
            </div>


        </div>
    )
}



export default ItemDetail