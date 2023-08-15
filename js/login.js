const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contraseña")
const btnEntar = document.querySelector("#btn-entar")

btnEntar.addEventListener("click", (evento) => {
    login()


function login(){
    evento.preventDefault();
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value

    }
    if(data.usuario == "massy.damiano@gmail.com" && data.contraseña == "massy456"){
        location.href = "admin.html"
    }else{
        alert("usuario incorrecto")
    }
}

});

