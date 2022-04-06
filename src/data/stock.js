import buzo1 from "../components/img/fotos/buzo/buzo1.png"
import buzo2 from "../components/img/fotos/buzo/buzo2.png"
import remera1 from "../components/img/fotos/remera/remera1.png"
import remera2 from "../components/img/fotos/remera/remera2.png"
import pantalon1 from "../components/img/fotos/pantalon/pantalon1.png"
import campera1 from "../components/img/fotos/campera/campera1.png"
import campera2 from "../components/img/fotos/campera/campera2.png"
import accesorio1 from "../components/img/fotos/accesorio/accesorio1.png"

const stock = [
    {
        nombre: 'Buzo Vinson',
        id: 1,
        precio: 4500,
        img: buzo1,
        disponibles: 5,
        categoria: 'buzos',
        oferta: false
    },
    {
        nombre: 'Buzo Termico Beyer',
        id: 2,
        precio: 4000,
        img: buzo2,
        disponibles: 5,
        categoria: 'buzos',
        oferta: false
    },
    {
        nombre: 'Remera Champion',
        id: 3,
        precio: 5000,
        img: remera1,
        disponibles: 5,
        categoria: 'remeras',
        oferta: false
    },
    {
        nombre: 'Remera Topper',
        id: 4,
        precio: 3000,
        img: remera2,
        disponibles: 5,
        categoria: 'remeras',
        oferta: false
    },
    {
        nombre: 'Pantalón NIKE',
        id: 5,
        precio: 6000,
        img: pantalon1,
        disponibles: 5,
        categoria: 'pantalones',
        oferta: false
    },
    {
        nombre: 'Campera Converse',
        id: 6,
        precio: 7500,
        img: campera1,
        disponibles: 5,
        categoria: 'camperas',
        oferta: false
    },
    {
        nombre: 'Campera NIKE',
        id: 7,
        precio: 3500,
        img: campera2,
        disponibles: 5,
        categoria: 'camperas',
        oferta: false
    },
    {
        nombre: 'Billetera Quiksilver',
        id: 8,
        precio: 5000,
        img: accesorio1,
        disponibles: 5,
        categoria: 'accesorios',
        oferta: false
    },
]

export const getProducts = new Promise ((resolve, reject) => {
    //acciones
    let condition = true 
    if(condition){
        setTimeout(()=>{
            resolve(stock)
        },2000)
    }else{
        reject('Error')
    }
    })