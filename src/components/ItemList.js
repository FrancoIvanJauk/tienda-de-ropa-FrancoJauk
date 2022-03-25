

export let buzo = [
    {
        talle: 'S',
        color: 'Gris',
        disponibles: 5,
        costo: "$2000"

    }
]


function buzoInfo(){
    const producto = buzo.map((elemento)=> `Talle: ${elemento.talle} 
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
    setTimeout(()=> alert(producto) ,2000);

   })
   .catch(err=>{
    setTimeout(()=>{ alert("Lo siento, No hay prenda disponible") },2000)
   })

};


export default buzoInfo

