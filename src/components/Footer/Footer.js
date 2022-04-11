import React from "react";
import "../Footer/footer.css"
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import logo from "../img/logo.png"

function Footer(){
    return(
        <div className="container-fluid boxFooter">
        <div className="row boxRow">

            <div className="col-lg-4 col-md-4 col-xs-12">
                <h4>Outfit Reaction</h4>
                <img className="logo" src={logo}></img>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
                <h4>Siguenos</h4>
                <div className="siguenosItems">
                    <a href="https://www.facebook.com/"><BsFacebook className="facebook"/></a>
                    <a href="https://www.instagram.com/"><BsInstagram className="instagram"/></a>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
                <h4>Contacto</h4>
                <div className="boxTextoContacto">
                    <p className="textoContacto">Whatsapp: +54 9 11 2482-2711</p>
                    <p className="textoContacto">Email: OutfitReaction@gmail.com</p>
                    <p className="textoContacto">Horarios de atención:<br/>Lunes a Viernes de 08:00 a 17:00 <br/>Sábados de 08:00 a 13:00</p>

                </div>
            </div>
            </div>

        </div>
    )
}

export default Footer