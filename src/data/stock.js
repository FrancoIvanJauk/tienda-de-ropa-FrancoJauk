import foto from "../components/img/fotos/foto.jpg"

const stock = [
    {
        nombre: 'Buzo',
        id: 1,
        precio: 3000,
        img: foto,
        disponibles: 5,
        categoria: 'buzos',
        oferta: false
    },
    {
        nombre: 'Buzo',
        id: 2,
        precio: 3500,
        img: foto,
        disponibles: 5,
        categoria: 'buzos',
        oferta: false
    },
    {
        nombre: 'Remera',
        id: 3,
        precio: 2500,
        img: foto,
        disponibles: 5,
        categoria: 'remeras',
        oferta: false
    },
    {
        nombre: 'Pantalon',
        id: 4,
        precio: 1500,
        img: foto,
        disponibles: 5,
        categoria: 'remeras',
        oferta: false
    },
    {
        nombre: 'Pantalon',
        id: 5,
        precio: 2500,
        img: foto,
        disponibles: 5,
        categoria: 'pantalones',
        oferta: false
    },
    {
        nombre: 'Campera',
        id: 6,
        precio: 4500,
        img: foto,
        disponibles: 5,
        categoria: 'camperas',
        oferta: false
    },
    {
        nombre: 'Campera',
        id: 7,
        precio: 3500,
        img: foto,
        disponibles: 5,
        categoria: 'camperas',
        oferta: false
    },
    {
        nombre: 'Accesorios',
        id: 8,
        precio: 2500,
        img: foto,
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