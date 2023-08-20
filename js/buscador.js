import { clientServices } from "../service/client-service.js";

const buscador = document.querySelector("#input");

function getProductosFiltrados(listaProductos, inputNombreProducto) {
    return listaProductos.filter(producto => {
      return producto.nombre.includes(inputNombreProducto);
    });
  }


clientServices.listaProductos().then((dataProductos) =>{
    dataProductos.forEach((producto)=>{
        const productos = producto.nombre
    
    buscador.addEventListener("keyup", (e) => {
    
        if( e.target.matches("#input")){
            productos.forEach((producto) =>{
                console.log(producto)
            })
        } 
        
         
     
     
     });
    })
})


