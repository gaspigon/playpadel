

let notificacion = document.getElementsByClassName("notif");
let botonNotificacion = document.getElementById("iNotificacion");
let contador = 0;


if(localStorage.length > 0){



//TRAEMOS A ESTE JS EL OBEJTO DATOS
let datosPersona = localStorage.getItem('datos');

//LO PARSEAMOS A OBJETO
let nombre = JSON.parse(datosPersona);

//OBTENEMOS EL TITULO DEL HTML
let titulo = document.getElementById("titulo_nombre");


//MOSTRAMOS EN PANTALLA EL NOMBRE DE LA PERSONA
titulo.innerHTML = "Hola " + nombre.nombre  + ",";


}else{
    console.log("error");
}

for (let i=0 ; i<localStorage.length; i++){
    let key = localStorage.key(i);
    if(key > 0 && key <= 100){
        console.log("correcto");
        notificacion[0].style.display = "block";  
        contador++;
        notificacion[0].innerHTML = contador;  

        botonNotificacion.addEventListener("click",(e)=>{
            e.preventDefault();
             
                Swal.fire({
                    title: 'Tus reservas' ,

                    showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            for(let i=0 ; i<localStorage.length; i++){
                let clave = localStorage.key(i);
                if(clave > 0 && clave <=100){
                    localStorage.removeItem(clave);
                }
            }
            notificacion[0].style.display = "none";
        })
        
        

    }else{
        console.log("no hay reservas");
    }
}
