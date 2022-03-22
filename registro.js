

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




//obtenemos el evento de enviar
registro.addEventListener("submit", envioFormulario); //llamamos a la funcion enviar formulario

function envioFormulario(e){
    e.preventDefault(); //frenamos la acrualizacion de la pagina

    let datoNuevo = new Datos(nombre.value, email.value, pass1.value);

    //let idDatos = "Dato"+contador; 
    //contador++;

    //limpiar inputs
    nombre.value = "";
    email.value = "";
    pass1.value = "";

    localStorage.setItem("datos",JSON.stringify(datoNuevo));
   

    
    location.href = "index.html";
}

/*

    console.log(mail,pass1,nombre);

    localStorage.setItem('e-mail',mail);
    localStorage.setItem('pass',pass1);
    localStorage.setItem('name',nombre);

    
    //location.href = "index.html";





/*

    localStorage.setItem('e-mail',mail);
    localStorage.setItem('pass',pass1);
    localStorage.setItem('name',nombre);

    
    location.href = "index.html";
*/