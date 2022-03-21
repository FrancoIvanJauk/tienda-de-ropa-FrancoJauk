import React from "react";
import buzo from "./img/Buzos/buzo.jpeg"
import "./Item.css"
import buzoInfo from "./ItemList";

let botonInfo = document.getElementById("info")

export let informacionRopa = document.getElementById("informacionRopa")

function Item(){
    return(
        <div className="itemBox">
            <div>
            <button className="info" onClick={info} id="info">Info</button>
            <img className="buzo" src={buzo}></img>
            </div>
            <p className="infoRopa" id="informacionRopa"></p>
        </div>
    )
};


//efecto espera
let efectoEspera = separacion => {
    let arrRespuesta = separacion.split("");
    let i = 0;
    let print = setInterval(function(){
        botonInfo.innerHTML += arrRespuesta[i];
        i++
    i == arrRespuesta.length && clearInterval(print)
    },300)
}
//fin de efecto espera


//lo que se ejecuta al apretar info
function info (){
    botonInfo.innerHTML=""
    efectoEspera(".....");
    
    buzoInfo();
    
    setTimeout(()=> {botonInfo.innerHTML="Info"
     },2500);
    
}





export default Item;

