import { clientServices } from "../service/client-service.js"

const formulario = document.querySelector("form")


formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault()

    const url = document.querySelector("[data-url]").value

    const nombre = document.querySelector("[data-nombre]").value

    const categoria = document.querySelector("[data-categoria]").value

    const precio = document.querySelector("[data-precio]").value

    const descripcion = document.querySelector("[data-text]").value

    console.log(nombre, " ", url,categoria,precio,"   ", descripcion)

clientServices
    .crearProducto(url,nombre,precio,categoria)
    .then( respuesta  => {
        
        if(respuesta.ok){
             window.location.href = "../html/productos.html"
            
        }else{
            alert("no se pudo crear el producto")
        }
})
    .catch((error) =>{

        console.log(error)
    });
 })
