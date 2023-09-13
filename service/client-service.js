//Este archivo se comunica con el servidor, recibe la respuesta 
//y despues la genera en un json
//FETCH API 
const listaProductos = () => fetch("http://localhost:3000/productos").then((dataProductos) => dataProductos.json())

const listaProductos2 = () => fetch("http://localhost:3000/productos").then((dataProductos2) => dataProductos2.json())
const listaProductos3 = () => fetch("http://localhost:3000/productos").then((dataProductos3) => dataProductos3.json())



const crearProducto = (url,nombre,precio,categoria) =>{
   return fetch("http://localhost:3000/productos",{
   method: "POST",
   headers: {
      "Content-Type": "application/json"
   },
   body: JSON.stringify({url,nombre,precio,categoria, id: uuid.v4()}),
   
})
.then((respuesta) =>{
   
   if(categoria.length > 0){

   
   
   if(categoria === "star-wars"){
      return fetch("http://localhost:3000/productosStar",{
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({url,nombre,precio,categoria,}),
   })
}else if(categoria === "consolas"){
   return fetch("http://localhost:3000/productosConsolas",{
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({url,nombre,precio,categoria, }),
   })
   
}else if(categoria === "diversos"){
   return fetch("http://localhost:3000/productosDiversos",{
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({url,nombre,precio,categoria,}),
   
   })
}else{
   alert("Recuerda que las categorias son: (star-wars,consolas y diversos")
}  
}

if(respuesta.ok){
      return respuesta
   }else{
      throw new Error("No se pudo crear el producto :/")
   }

   
})
}

 const eliminarCliente = (id) => {
   
   return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
   })
   /* .then((respuesta) =>{
      console.log("la categoria es :" , categoria)
   }) */
} 

const detalleCliente = (id) =>{
   return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => 
   respuesta.json()
   );
}

const actualizarCliente = (nombre,url,precio,id) => {
   return fetch(`http://localhost:3000/productos/${id}`,{
   method:"PUT",
   headers:{
      "Content-Type": "application/json"
   },
   body:JSON.stringify({nombre,url,precio})
   })
   .then(respuesta => console.log(respuesta))
   
   .catch((err) => console.log(err))
}
 

export const clientServices= {    
    listaProductos,
    listaProductos2,
    listaProductos3,
    crearProducto,
   eliminarCliente, 
   detalleCliente,
   actualizarCliente,
 }