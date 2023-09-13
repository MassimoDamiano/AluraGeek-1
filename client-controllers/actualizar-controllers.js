import { clientServices } from "../service/client-service.js"

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = () => {
    const url1 = new URL(window.location)
    const id = url1.searchParams.get("id")
    if(id === null){
        window.location.href = "../html/error.html"
    }


    const nombre = document.querySelector("[data-nombre]")
    const url = document.querySelector("[data-url]")
    const precio = document.querySelector("[data-precio]")
    
    clientServices.detalleCliente(id).then((producto) => {
        nombre.value = producto.nombre
        url.value = producto.url
        precio.value = producto.precio
    })
}



obtenerInformacion()

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const url1 = new URL(window.location)
    const id = url1.searchParams.get("id")

    const nombre = document.querySelector("[data-nombre]").value
    const url = document.querySelector("[data-url]").value
    const precio = document.querySelector("[data-precio]").value
    console.log(nombre," ", url, " ", precio)
    clientServices.actualizarCliente(nombre,url,precio,id).then(() => {
        window.location.href = "../html/edicion-concluida.html"
    })
})