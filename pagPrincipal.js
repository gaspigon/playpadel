
//TRAEMOS A ESTE JS EL OBEJTO DATOS
let datosPersona = localStorage.getItem('datos');

//LO PARSEAMOS A OBJETO
let nombre = JSON.parse(datosPersona);

//OBTENEMOS EL TITULO DEL HTML
let titulo = document.getElementById("titulo_nombre");


//MOSTRAMOS EN PANTALLA EL NOMBRE DE LA PERSONA
titulo.innerHTML = "Hola " + nombre.nombre  + ",";