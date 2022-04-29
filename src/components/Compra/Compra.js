import React from "react"
import { db} from "../../firebase/config";
import {  getDoc, doc} from "firebase/firestore";
import { useState } from "react"
import './Compra.css'

const nombreComprador = []
const apellidoComprador = []
const email = []
const productos = []
const total = []

const Compra = () =>{
    
    const [info, setInfo] = useState(null)
    const [value, setValue] = useState({
        idCompra:''
    })
    const valueId = (elem) => {
        setValue({
            value,
            [elem.target.name]: elem.target.value
        })
    }


    const handleSubmit = async (elem) => {
                elem.preventDefault()
                total.pop()
                productos.splice(0)
                nombreComprador.pop()
                apellidoComprador.pop()
                email.pop()

        const docRef = doc(db, "ordenes", value.idCompra);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          nombreComprador.push(docSnap.data().comprador.nombre)
          apellidoComprador.push(docSnap.data().comprador.apellido)
          email.push(docSnap.data().comprador.email)
          docSnap.data().items.forEach(comprado => productos.push(` ${comprado.nombre} precio de $${comprado.precio}. `))
          total.push(docSnap.data().total)
          setInfo(1)

        } else {
          alert('Su id a sido incorrecto, intente nuevamente')
          document.getElementById('codigoCompra').value=''
        } 
}

if(info){
    return(
        <div>
            <div className="infoComprador">
                <p>Compra hecha a nombre de : {nombreComprador} {apellidoComprador}</p>
                <p>Nos comunicaremos al siguiente mail cuando la compra esté en camino : {email}</p>
            </div>
            <div className="compraFinal">
                <div>
                <p><p className="dosPuntos">Los productos que usted compro son:</p>{productos}</p>
                </div>
                
                <p><p className="dosPuntos">Precio Total:</p> ${total}</p>
            </div>
            <p className="soporte">Si en 3 días hábiles no se le ha entregado su producto, comuníquese con soporte</p>
        </div>
    )
}

return(
    <div className="fondo">
        <h6 className="idCompra">Compras</h6>
        <form onSubmit={handleSubmit}>
        <input autoComplete="off" className="inputid" id="codigoCompra" type={'text'} name='idCompra' placeholder='Introduzca su ID de compra' value={value.idCompra} onChange={valueId}></input>
        <div>
        <button className="botonIdCompra">Ver Compra</button>
        </div>
        </form>
    </div>
)
} 

    


export default Compra