//En este archivo se trabaja la interaccion de javaScript y el html

import { clientServices } from "../service/client-service.js"


const cajaProductos = document.querySelector("[data-p]")
const cajaProductosStar = document.querySelector("[data-p-s]")
const cajaProductosConsolas = document.querySelector("[data-p-c]")
const cajaProductosDiversos = document.querySelector("[data-p-d]")

const crearNuevaLinea = (url, nombre, precio) =>{
const linea = document.createElement("div")
    const contenido = 
   `<div class="caja">
    <img src="${url}" alt="${nombre}">
    <h4 class="caja__titulo">${nombre}</h4>
    <p class="caja__precio"><span>$</span>${precio}</p>
    <button class="btn-productos">Ver producto</button>
</div>`;

linea.innerHTML = contenido;
return linea
}
clientServices.listaProductos().then( (dataProductos) =>{
    dataProductos.forEach((producto) =>{
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio)
         cajaProductos.appendChild(nuevoProducto);
    })
} )




clientServices.listaProductosStar().then( (dataStar) =>{
    dataStar.forEach( (producto) => {
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio)
         cajaProductosStar.appendChild(nuevoProducto);
     })
     
     
} )
.catch((error) => alert("Ocurrio un Error"))




clientServices.listaProductosConsolas().then( (dataConsolas) =>{
    dataConsolas.forEach( (producto) => {
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio)
        cajaProductosConsolas.appendChild(nuevoProducto);
         
     })
     
} )



clientServices.listaProductosDiversos().then( (dataDiversos) =>{
    dataDiversos.forEach( (producto) => {
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio)
        cajaProductosDiversos.appendChild(nuevoProducto);
         
     })
     
} )





