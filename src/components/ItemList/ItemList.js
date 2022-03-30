import React from "react"
import Item from "../Item/Item"
import "./ItemList.css"



const ItemList = ({listaProductos}) => {
    return (
      <div className="productos">
          {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}
      </div>
    )
  }
  
  export default ItemList

