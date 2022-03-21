import React from "react";
import {informacionRopa} from "./Item"



let buzo = [
    {
        talle: 'S',
        color: 'Gris',
        disponibles: 5

    }
]


function buzoInfo(){
    const nuevo = buzo.map((elemento)=> `Talle: ${elemento.talle} 
Color: ${elemento.color} 
Disponibles: ${elemento.disponibles}`)

   const resultado = new Promise((resolve, reject) =>{
       if(buzo[0].disponibles > 0){
        resolve()
       }
       else{
           reject()
       }
   })
   resultado
   .then(res=>{
    setTimeout(()=>{ alert(nuevo ) },2000);

   })
   .catch(err=>{
    setTimeout(()=>{ alert("Lo siento, No hay prenda disponible") },2000)
   })

};
















export default buzoInfo

