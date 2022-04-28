class InicioSesion {
    constructor(email, contraseña){
        this.email = email;
        this.contraseña = contraseña;
    }
}


//let valorEmail = localStorage.getItem('e-mail');
//let valorContraseña = localStorage.getItem('pass');

//PEDIMOS DE LOCAL STORAGE LOS DATOS DE REGISTRO
let valorDatos = localStorage.getItem('datos');
console.log(valorDatos);


//PASAMOS LOS DATOS DE STRING A OBJETO
let pasoParse = JSON.parse(valorDatos);
console.log(pasoParse);



//OBTENEMOS LOS DATOS DEL FORMULARIO
const sesion = document.getElementById("inicio");

//OBTENEMOS LOS DATOS DE LOS INPUTS
let email = document.getElementById("email");
let password = document.getElementById("pass");
let boxMsj = document.getElementById("miModal");
let parrafo = document.getElementById("parrafo");
let titulo = document.getElementById("titulo");
let inc = document.getElementsByClassName("inc");


//EVENTO SUBMIT DEL FORMULARIO CON LA FUNCION VALIDAR LOS DATOS
sesion.addEventListener("submit", validacion);


//FUNCION QUE VALIDA SI LOS DATOS DEL EMAIL Y CONTRASEÑA ESTAN CORRECTOS
function validacion(e){
    e.preventDefault();

    //CREAMOS UN NUEVO OBJETO INICIO SESION
    let datoInicio = new InicioSesion(email.value, password.value);
    


    if(password.value == "" || email.value == ""){
        inc[0].style.display = "block";
        inc[1].style.display = "block";

        email.addEventListener("keydown",()=>{
            inc[0].style.display = "none";
        });

        password.addEventListener("keydown",()=>{
            inc[1].style.display = "none";
        });
    }
        else if(datoInicio.email != pasoParse.email){
            inc[0].style.display = "block";

            email.addEventListener("keydown",()=>{
                inc[0].style.display = "none";
            });
    }
        else if(datoInicio.contraseña != pasoParse.contraseña){
            inc[1].style.display = "block";
            password.addEventListener("keydown",()=>{
                inc[1].style.display = "none";
            });
        }
        else if(datoInicio.email === pasoParse.email && datoInicio.contraseña === pasoParse.contraseña){
            location.href = "../paginaprincipal.html";
        }

}



