class Notif {
    constructor(dia, hora){
        this.dia = dia;
        this.hora = hora;
    }
}

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

let array =[];
//Aca es donde del local storage trato de mostrar que tenes una notificacion nueva recorriendo el localstorage
//uso contador para mostrar el numero de la notificacion que cuando tocas se borra como "leido"
for (let i=0 ; i<localStorage.length; i++){
    let key = localStorage.key(i);
    if(key > 0 && key <= 100){
        notificacion[0].style.display = "block";  
        contador++;
        notificacion[0].innerHTML = contador;  

        botonNotificacion.addEventListener("click",(e)=>{
            e.preventDefault();
             let reserva = JSON.parse( localStorage.getItem(key));
             array.push(reserva.dia);
             console.log(array);

         
             
                Swal.fire({
                    title: 'Tus reservas',
                    html: 
                        '<p> Dia: ' + reserva.dia + '</p>' +
                        '<p> Horario: ' + reserva.hora + '</p>' + '<p>Club: ' + reserva.club +  '</p>',
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
        
        

    }
}
