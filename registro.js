

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
    let titulo = document.getElementById("titulo");
    let error = document.getElementsByClassName("form-control");
    




//obtenemos el evento de enviar
registro.addEventListener("submit", envioFormulario); //llamamos a la funcion enviar formulario

function envioFormulario(e){
    e.preventDefault(); //frenamos la acrualizacion de la pagina

    //Le saco la clase error para que por default no tenga ninguna
    window.addEventListener("click",()=>{
        nombre.classList.remove('error');
        mail.classList.remove('error');
        pass1.classList.remove('error');
    });


    
    
//Si todos los campos estan vacios da error de datos imcompletos
if(nombre.value == "" && email.value =="" && pass1.value == ""){
        titulo.innerText = "error";
        parrafo.innerText = "Campos Incompletos";
        modal.style.display = "block";
        setTimeout(()=>{
            modal.style.display = "none";
        },1000);

        mail.classList.add('error');
        nombre.classList.add('error');
        pass1.classList.add('error');
        

}   
  //si el campo de nombre esta vacio
    else if(nombre.value == ""){
        titulo.innerText = "error";
        parrafo.innerText = "Nombre Incompleto";
        modal.style.display = "block";
        setTimeout(()=>{
            modal.style.display = "none";
        },1000);

        nombre.classList.add('error');
}
    //si el campo de email esta vacio
    else if(mail.value == ""){
        titulo.innerText = "error";
        parrafo.innerText = "Email Incompleto";
        modal.style.display = "block";
        setTimeout(()=>{
            modal.style.display = "none";
        },1000);

        mail.classList.add('error');
}
    //si el campo de contraseña esta vacio
    else if(pass1.value == ""){
        titulo.innerText = "error";
        parrafo.innerText = "Contraseña Incompleta";
        modal.style.display = "block";
        //se espera tiempo para que se vea el mensaje 
        setTimeout(()=>{
            modal.style.display = "none";
        },1000);

        pass1.classList.add('error');
}
    
else{

    //si se ingresan todos los datos se crea el objeto se limpian los campos y se guardan los datos en el localstorage con un tiempo de espera asi se ve el mensaje

    let datoNuevo = new Datos(nombre.value, email.value, pass1.value, );
       
    //limpiar inputs
    nombre.value = "";
    email.value = "";
    pass1.value = "";


    localStorage.setItem('datos',JSON.stringify(datoNuevo)); //tomo datoNuevo.email como el key para guardar en el local
    
    titulo.innerText = "Registro Existoso!"
    parrafo.innerText = "Gracias " + datoNuevo.nombre ;
    modal.style.display = "block";
    
    //le pongo timeOut para que el mensaje se pueda leer unos dos segundos
    setTimeout(()=>{
        location.href = "index.html";
    }, 1000);
    }

}
