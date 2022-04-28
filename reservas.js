


//clase de datos para el registro de personas
class Reserva {
    constructor(dia, hora, club){
        this.dia = dia;
        this.hora = hora;
        this.club = club;
    }
}

const formulario = document.getElementById("formReserva");

let dia = document.getElementById("date");
let horario = document.getElementById("hora");
let id = Math.floor(Math.random() * (100-0+1)) +1;


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();


    let reservaNueva = new Reserva (dia.value, horario.value, club.value);
    
    Toastify({

        text: "Turno Reservado " + horario.value ,
        gravity: "top", 
        position: "right", 
        duration: 1000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        
        }).showToast();

        localStorage.setItem(id, JSON.stringify(reservaNueva));
        

        console.log(reservaNueva);

        //volvemos a la pagina principal
        setTimeout(()=>{
           location.href = "../paginaprincipal.html";
       },1200);

})



