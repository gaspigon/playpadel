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

//PASAMOS LOS DATOS DE STRING A OBJETO
let pasoParse = JSON.parse(valorDatos);



//OBTENEMOS LOS DATOS DEL FORMULARIO
const sesion = document.getElementById("inicio");

//OBTENEMOS LOS DATOS DE LOS INPUTS
let email = document.getElementById("email");
let pass1 = document.getElementById("pass");


//EVENTO SUBMIT DEL FORMULARIO CON LA FUNCION VALIDAR LOS DATOS
sesion.addEventListener("submit", validacion);


//FUNCION QUE VALIDA SI LOS DATOS DEL EMAIL Y CONTRASEÑA ESTAN CORRECTOS
function validacion(e){
    e.preventDefault();

    //CREAMOS UN NUEVO OBJETO INICIO SESION
    let datoInicio = new InicioSesion(email.value, pass1.value);

    //COMPARAMOS SI SON IGUALES LOS DATOS
    if(datoInicio.email == pasoParse.email && datoInicio.pass1 == pasoParse.pass1){
        console.log("datos correctos");
        location.href = "paginaprincipal.html";

    }else{
        console.log("Datos Incorrectos");
        alert("Datos Incorrectos");
    }
}



