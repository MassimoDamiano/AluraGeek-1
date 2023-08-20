const formulario = document.querySelector("form")

formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault()
    console.log("hola mundo")
})

clientServices.listaProductos().then( (dataProductos) =>{
    dataProductos.forEach((producto) =>{
        const nuevoProducto = crearNuevaLinea(producto.url,producto.nombre,producto.precio)
         cajaProductos.appendChild(nuevoProducto);
    })
} )

