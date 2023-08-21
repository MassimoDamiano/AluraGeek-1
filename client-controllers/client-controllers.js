import { clientServices } from "../service/client-service.js";

const cajaProductosAdmin = document.querySelector("[data-productos-admin]");
const cajaProductosStar = document.querySelector("[data-p-s]");
const cajaProductos = document.querySelector("#data-p");
const cajaProductosConsolas = document.querySelector("[data-p-c]");
const cajaProductosDiversos = document.querySelector("[data-p-d]");

const crearNuevaLinea = (url, nombre, precio) => {
    const linea = document.createElement("div");
    const contenido = `
        <div class="caja">
            <img src="${url}" alt="${nombre}">
            <h4 class="caja__titulo">${nombre}</h4>
            <p class="caja__precio"><span>$</span>${precio}</p>
            <button class="btn-productos">Ver producto</button>
        </div>`;
    linea.innerHTML = contenido;
    return linea;
}

// Create an array of promises for fetching data from different categories
const promises = [
    clientServices.listaProductosStar(),
    clientServices.listaProductosConsolas(),
    clientServices.listaProductosDiversos(),
    clientServices.listaProductos(),
    clientServices.listaProductos2()
];

// Use Promise.all() to wait for all promises to complete
clientServices.listaProductos().then( (dataProductos) =>{
    dataProductos.forEach((producto) =>{
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio);        
        cajaProductos.appendChild(nuevoProducto);
    })
})

clientServices.listaProductos2().then( (dataProductos2) =>{
    dataProductos2.forEach((producto) =>{
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio);        
        cajaProductosAdmin.appendChild(nuevoProducto);
    })
})
Promise.all(promises)
    .then(([dataStar, dataConsolas, dataDiversos, ]) => {
        dataStar.forEach((producto) => {
            const nuevoProducto = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            cajaProductosStar.appendChild(nuevoProducto);
        });

        dataConsolas.forEach((producto) => {
            const nuevoProducto = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            cajaProductosConsolas.appendChild(nuevoProducto);
        });

        dataDiversos.forEach((producto) => {
            const nuevoProducto = crearNuevaLinea(producto.url, producto.nombre, producto.precio);
            cajaProductosDiversos.appendChild(nuevoProducto);
        });

       
    })
    .catch((error) => {
        alert("Ocurrio un Error");
       
    });



