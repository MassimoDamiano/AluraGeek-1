import { clientServices } from "../service/client-service.js";


  const buscador = document.getElementById("buscador")
alert("dd")

  clientServices.listaProductos3().then((dataProductos3) =>{
    console.log(dataProductos3)
    let body = ``
    for(let i =0; i < dataProductos3.length; i++){
      body += `<div class="caja" id="caja">
      <img src="${url}" alt="${nombre}">
      <h4 class="caja__titulo">${nombre}</h4>
      <p class="caja__precio"><span>$</span>${precio}</p>
      <button class="btn-productos">Ver producto</button>
  </div>`
  document.querySelector(".section-productos").innerHTML = body
    }













  })