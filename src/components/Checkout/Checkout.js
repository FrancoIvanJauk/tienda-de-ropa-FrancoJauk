import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { getDocs, collection, addDoc, Timestamp, writeBatch, query, where, documentId} from "firebase/firestore"
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import './Checkout.css'



const Checkout = () => {

    const {cart, cartTotal, vaciarCarrito} = useContext(CartContext)

    const [ordenId, setOrdenId] = useState(null)

    const [sinStock, setsinStock] = useState(null)

    const [values, setValues] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:''
    })


    const handleInputChange = (elem) => {
        setValues({
            ...values, 
            [elem.target.name]: elem.target.value
        })
    }

    const handleSubmit = async (elem) => {
        elem.preventDefault()

        const orden = {
            items: cart,
            total: cartTotal(),
            comprador: {...values},
            fyh: Timestamp.fromDate(new Date())
        }

        const ordenesRef = collection (db, 'ordenes');
        const batch = writeBatch(db);
        const productosRef = collection(db, 'productos');
        const q = query (productosRef, where(documentId(), 'in', cart.map((item)=> item.id)))

        const productos = await getDocs(q)

        const outOfstock = []
        
        productos.docs.forEach((doc)=>{
            const itemInCart = cart.find((item) => item.id === doc.id)
            if(doc.data().disponibles >= itemInCart.cantidad){
                batch.update(doc.ref, {
                    disponibles: doc.data().disponibles - itemInCart.cantidad
                })
            }else{
                outOfstock.push(itemInCart)

            }
        })

        if(outOfstock.length === 0){
            batch.commit()
            addDoc(ordenesRef, orden)
            .then((doc)=>{
                setOrdenId(doc.id)
                vaciarCarrito()
            })
        }else{
            setsinStock(true)
            vaciarCarrito()
        }
    }

    if (sinStock === true){
        return <div>
                <p className="error">Lo sentimos, los productos que elegiste no cumplen con la cantidad de stock que usted ha seleccionado, inténtelo nuevamente</p>
                <Link to='/home'><button className="boton">Pagina Principal</button></Link>
               </div>
    }

    if (ordenId){
        return( <div className="boxOrden">
                <h5 className="compraEfectuada">Su compra ha sido realizada exitosamente</h5>
                <p className="orden"><b>Numero de orden:</b> {ordenId}</p>
                <Link to='/compra'><button className="boton">Ver Compra</button></Link>
                <h6 className='atencion'>¡ ATENCIÓN !</h6>
                <p className='numeroOrden'>Por favor, guarde el número de orden para ver su compra. También será pedida por el repartido para entregar sus productos.</p>
                </div>
               
    )}


    if (cart.length === 0){
    return <Navigate to='/home'/>}

    return(
        <div>
            <h6 className="tituloForm">Complete con sus datos para efectuar la orden</h6>

            <form onSubmit={handleSubmit}>
                <div className="boxFormulario">  
                    <div>     
                        <input className="infoForm" type={'text'} name="nombre" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <input className="infoForm" type={'text'} name='apellido' placeholder="Apellido" value={values.apellido} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <input className="infoForm" type={'email'} name='email' placeholder='Email' value={values.email} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <input className="infoForm" type={'telefono'} name='telefono' placeholder="Telefono" value={values.telefono} onChange={handleInputChange} required/>
                    </div>
                    <button className="enviar">Comprar</button>
                </div> 
            </form>

        </div>

    )
}

export default Checkout