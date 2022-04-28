import React from "react";
import "./Home.css"
import { Carousel } from "react-bootstrap";
import foto1 from "../Home/imgHome/foto1.jpg";
import foto2 from "../Home/imgHome/foto2.jpg";
import foto3 from "../Home/imgHome/foto3.jpg";
import {BsBag} from "react-icons/bs";
import {BsCreditCard2Back} from "react-icons/bs";
import {BsTruck} from "react-icons/bs"
import accesorios from "../Home/imgHome/Accesorios.jpg"
import todo from "../Home/imgHome/todo.jpg"
import remeras from "../Home/imgHome/remeras.jpg"
import pantalones from "../Home/imgHome/pantalones.jpg"
import camperas from "../Home/imgHome/camperas.jpg"
import buzos from "../Home/imgHome/buzos.jpg"
import {Link} from 'react-router-dom'

function Home(){
    return(

        <div className="carrusel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 fotos"
                  src={foto1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Accesorios</h3>
                  <p className="textoCarrusel">Comprá accesorios en Outfit Reaction. Encontrá carteras, mochilas, relojes y más en tu tienda online. Cambio y devolución gratis en todo el país</p>
                  <Link to="/categoria/accesorios"><button className="botonExplorar">Explorar</button></Link>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fotos"
                  src={foto2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Outfits</h3>
                  <p className="textoCarrusel">Elige lo que te guste y combina tus Outfits con nuestros productos</p>
                  <Link to="/todo"><button className="botonExplorar">Explorar</button></Link>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fotos"
                  src={foto3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Camperas</h3>
                  <p className="textoCarrusel">Viví La Experiencia ¡Mes de Camperas!. 3 y 6 Cuotas Sin Interés y Envíos Gratis A Partir De $6.500. Primer Cambio Gratis.</p>
                  <Link to="/categoria/camperas"><button className="botonExplorar">Explorar</button></Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            
            <div className="infoAyuda">

              <div className="informacion">
                <BsBag className="iconos"/>
                <h5 className="titulosInfo">¿Cómo Comprar?</h5>
                <p className="textoInfo">Seleccioná los artículos que quieras comprar, la cantidad y agregalos a tu carrito de compras. Monto mínimo de compra $5.000.</p>
              </div>

              <div className="informacion">
              <BsCreditCard2Back className="iconos"/>
              <h5 className="titulosInfo">Métodos De Pago</h5>
              <p className="textoInfo">Tarjetas de crédito, débito y transferencia bancaria a través de la web o en efectivo al retirar tu pedido en nuestro local.​</p>
              </div>

              <div className="informacion">
                <BsTruck className="iconos"/>
                <h5 className="titulosInfo">Formas De Envío</h5>
                <p className="textoInfo">Forma de envio mediante correo Argentino transporte FLASH (AMBA) y envíos por encomienda a través de VÍA CARGO o SENDBOX (interior).​</p>
              </div>

            </div >

            <div className="imagenesGrid">

            <Link to="/todo">
            <div className="boxImagenes">
                <h6 className="tituloImgInfo">Todo</h6>
                <img src={todo} className="imagenesLink"></img>
            </div>
            </Link>

            <Link to="/categoria/remeras"> 
              <div className="boxImagenes">
                <h6 className="tituloImgInfo">Remeras</h6>
                <img src={remeras} className="imagenesLink"></img>
              </div>
            </Link>

            <Link to="/categoria/buzos"> 
              <div className="boxImagenes">
                <h6 className="tituloImgInfo">Buzos</h6>
                <img src={buzos} className="imagenesLink"></img>
              </div>
            </Link>

            <Link to="/categoria/camperas"> 
              <div className="boxImagenes">
                <h6 className="tituloImgInfo">Camperas</h6>
                <img src={camperas} className="imagenesLink"></img>
              </div>
            </Link>

            <Link to="/categoria/pantalones"> 
              <div className="boxImagenes">
                <h6 className="tituloImgInfo">Pantalones</h6>
                <img src={pantalones} className="imagenesLink"></img>
              </div>
            </Link>

            <Link to="/categoria/accesorios"> 
              <div className="boxImagenes">
                <h6 className="tituloImgInfo">Accesorios</h6>
                <img src={accesorios} className="imagenesLink"></img>
              </div>
            </Link>

            </div>
        </div>
    )
}

export default Home