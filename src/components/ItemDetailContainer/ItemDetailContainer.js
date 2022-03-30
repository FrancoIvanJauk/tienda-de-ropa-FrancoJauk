import React,{ useEffect, useState }  from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducts } from "../../data/stock";
import { useParams } from "react-router-dom";





const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [cargando, setCargando] = useState(true)

    const {itemId} = useParams()
    
            useEffect(()=>{
              getProducts
              .then((res)=>{
                setProductDetail(res.find((producto) => producto.id === Number(itemId)))
              })
              .finally(()=>{
                setCargando(false)
              })


            }, [itemId])
      return (
        <div>
            {cargando ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
           
        </div>
      )
    }
    
    export default ItemDetailContainer