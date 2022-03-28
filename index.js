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


//EVENTO SUBMIT DEL FORMULARIO CON LA FUNCION VALIDAR LOS DATOS
sesion.addEventListener("submit", validacion);


//FUNCION QUE VALIDA SI LOS DATOS DEL EMAIL Y CONTRASEÑA ESTAN CORRECTOS
function validacion(e){
    e.preventDefault();

    //CREAMOS UN NUEVO OBJETO INICIO SESION
    let datoInicio = new InicioSesion(email.value, password.value);
    


    if(password.value == "" || email.value == ""){
        boxMsj.style.display = "block";
        titulo.innerText = "Error";
        parrafo.innerText = "Datos Incorrectos";
        email.classList.add('error1');

        setTimeout(()=>{
            boxMsj.style.display = "none";
        },1000);
    }
        else if(datoInicio.email != pasoParse.email){
            boxMsj.style.display = "block";
            titulo.innerText = "Error";
            parrafo.innerText = "Email Incorrecto";
            email.classList.add('error1');

            setTimeout(()=>{
                boxMsj.style.display = "none";
            },1000);
    }
        else if(datoInicio.contraseña != pasoParse.contraseña){
            boxMsj.style.display = "block";
            titulo.innerText = "Error";
            parrafo.innerText = "Contraseña Incorrecta";
            email.classList.add('error1');

            setTimeout(()=>{
                boxMsj.style.display = "none";
            },1000);
        }
        else if(datoInicio.email === pasoParse.email && datoInicio.contraseña === pasoParse.contraseña){
            location.href = "paginaprincipal.html";
        }

}



