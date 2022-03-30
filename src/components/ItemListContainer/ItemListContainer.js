import React,{useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getProducts} from "../../data/stock"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)

    const {categoriaId} = useParams()
    console.log(categoriaId)


useEffect(()=>{
    setCargando(true)
    getProducts
    .then((res) =>{
        if(categoriaId){
          setListaProductos(res.filter((prod)=>prod.categoria === categoriaId))
        }else{setListaProductos(res)
        }
      })
    .catch((error) => console.log(error))
    .finally(()=> setCargando(false))
}, [categoriaId])



  return (
    <div>
        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}

    </div>
  )
}

export default ItemListContainer