 const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contraseña")
const btnEntar = document.querySelector("#btn-entar")

btnEntar.addEventListener("click", (evento) => {
    login()

//AGREGAR SET TIME OUT PARA QUE CUANDO APRETES ENTRAR NO SEA TAN BRUSCO :)
function login(){
    evento.preventDefault();
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value

    }
    //alert("si quieres ingresar al modo administrador el usuario es:usuario@gmail.com y usuario123 ")
    if(data.usuario == "usuario@gmail.com" && data.contraseña == "papanoel"){
        location.href = "admin.html"
    }else{
        alert("usuario incorrecto")
    }
}

});

 