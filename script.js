import { Usuarios } from "./src/config/database.js";
import { alertaRedireccion } from "./src/utils/aletas.js";

let btnLogin = document.querySelector("#login"); //Selecciono el boton en una variable, se convierte en un objeto
btnLogin.addEventListener("click", ()=>{
    let correo = document.querySelector("#email").value; //Selecciono el valor del input
    let contrasena = document.querySelector("#password").value;
    let usuarioEncontrado = Usuarios.find((usuario)=> correo == usuario.correo && contrasena == usuario.contraseña) //Busca en la base de datos si existe el usuario
    if (usuarioEncontrado){
        return alertaRedireccion()
    }
    return alertaRedireccion()
}) //Agrega una accion al boton y esta atento a un evento - Se agrega una funcion flecha