import { clientServices } from "../service/client-service.js";

const cajaProductosAdmin = document.querySelector("[data-productos-admin]");
const cajaProductosStar = document.querySelector("[data-p-s]");
const cajaProductos = document.querySelector("#data-p");
const cajaProductosConsolas = document.querySelector("[data-p-c]");
const cajaProductosDiversos = document.querySelector("[data-p-d]");

alert("hola")


const crearNuevaLinea = (url, nombre, precio,id) => {
    const linea = document.createElement("div");
    const contenido = `
        <div class="caja" id="caja">
            <img src="${url}" alt="${nombre}">
            <h4 class="caja__titulo">${nombre}</h4>
            <p class="caja__precio"><span>$</span>${precio}</p>
            <button class="btn-productos">Ver producto</button>
        </div>`;
    linea.innerHTML = contenido;
    return linea;
}
const crearNuevaLineaAdmin = (url, nombre, precio,id) => {
    const lineaAdmin = document.createElement("div");
    const contenidoAdmin = `
        <div class="caja" >
            <img src="${url}" alt="${nombre}">
            <h4 class="caja__titulo">${nombre}</h4>
            <p class="caja__precio"><span>$</span>${precio}</p>
            <div className="">
            <a href="/html/editar.html?id=${id}"><button id="btn-editar" class="btn-e">Editar</button></a>
            <button id="${id}" class="btn-eliminar">Eliminar</button>
            </div>
        </div>`
        ;
    lineaAdmin.innerHTML = contenidoAdmin;
     
    const btnEliminar = lineaAdmin.querySelector(".btn-eliminar")
    btnEliminar.addEventListener("click", () =>{
        const id = btnEliminar.id;
        const categoria = clientServices.detalleCliente(id).then((producto) => console.log(producto.categoria))
        console.log(categoria)
        clientServices.eliminarCliente(id)
        
    }) 
    
    
    return lineaAdmin;
    
}






clientServices.listaProductos().then( (dataProductos) =>{
    dataProductos.forEach((producto) =>{ 
        if(producto.categoria === "star-wars"){
            const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio,producto.id);
            cajaProductosStar.appendChild(nuevoProducto);
        }else if(producto.categoria === "consolas"){
            const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio,producto.id);
            cajaProductosConsolas.appendChild(nuevoProducto);
        }else if(producto.categoria === "diversos"){
            const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio,producto.id);
            cajaProductosDiversos.appendChild(nuevoProducto);
        
    }
})
    // Todos los productos
    
})

clientServices.listaProductos2().then( (dataProductos2) =>{
    dataProductos2.forEach((producto) =>{
        const nuevoProducto1 = crearNuevaLineaAdmin(producto.url,producto.nombre,producto.precio,producto.id);        
        cajaProductosAdmin.appendChild(nuevoProducto1);
    })
})
clientServices.listaProductos3().then( (dataProductos3) =>{
    dataProductos3.forEach((producto) =>{
        const nuevoProducto2 = crearNuevaLinea(producto.url,producto.nombre,producto.precio,producto.id);        
        cajaProductos.appendChild(nuevoProducto2);
    })
})
.catch((error) => {
        console.warn("ocurrio un error")
       
    }); 



