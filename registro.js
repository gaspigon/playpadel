

//clase de datos para el registro de personas
class Datos {
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;

    }
}


const registro = document.getElementById("formulario"); //obtenemos el formulario 


//obtenemos los inputs del formulario registro

    let mail = document.getElementById("email");
    let pass1 = document.getElementById("pass");
    let nombre = document.getElementById("name");
    let modal = document.getElementById("miModal");
    let parrafo = document.getElementById("parrafo");
    

    //funcion que inclute el redireccionamiento a index
    function volverIndex (){
        location.href = "index.html";
    }


//obtenemos el evento de enviar
registro.addEventListener("submit", envioFormulario); //llamamos a la funcion enviar formulario

function envioFormulario(e){
    e.preventDefault(); //frenamos la acrualizacion de la pagina

    let datoNuevo = new Datos(nombre.value, email.value, pass1.value, );

    

    //limpiar inputs
    nombre.value = "";
    email.value = "";
    pass1.value = "";


    localStorage.setItem('datos',JSON.stringify(datoNuevo)); //tomo datoNuevo.email como el key para guardar en el local
   
    parrafo.innerText = "Gracias " + datoNuevo.nombre ;
    modal.style.display = "block";
    
    //le pongo timeOut para que el mensaje se pueda leer unos dos segundos
    setTimeout(volverIndex, 2000);
}

