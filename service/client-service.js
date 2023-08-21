//Este archivo se comunica con el servidor, recibe la respuesta 
//y despues la genera en un json
//FETCH API 

const listaProductosStar = () =>  fetch("http://localhost:3000/productosStar").then((dataStar) =>  dataStar.json())

const listaProductosConsolas = () => fetch("http://localhost:3000/productosConsolas").then((dataConsolas) => dataConsolas.json())

const listaProductosDiversos = () => fetch("http://localhost:3000/productosDiversos").then((dataDiversos) => dataDiversos.json())

const listaProductos = () => fetch("http://localhost:3000/productos").then((dataProductos) => dataProductos.json())
const listaProductos2 = () => fetch("http://localhost:3000/productos").then((dataProductos2) => dataProductos2.json())




 export const clientServices= {
    listaProductosConsolas,
    listaProductosDiversos,
    listaProductosStar,
    listaProductos,
    listaProductos2,
 }