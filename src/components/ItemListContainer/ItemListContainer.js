import React,{useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)

    const {categoriaId} = useParams()


useEffect(()=>{
    setCargando(true)

    const productosRef = collection(db, "productos");
    const q = categoriaId ? query(productosRef, where("categoria", "==", categoriaId)) : productosRef;

    getDocs(q)
      .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setListaProductos(items)
      })
      .finally(() => {
        setCargando(false)
      })

}, [categoriaId])



  return (
    <div>
        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}

    </div>
  )
}

export default ItemListContainer