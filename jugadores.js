//UTILIZO FECTH PARA PEDIR DATOS AL ARCHIVO DATOS.JSON

//traigo el elemento div donde voy a crear lo capurado de el .json
const box = document.getElementById("row");


//capturo formulario
const formulario = document.getElementById("form-buscar");

//sus valores
let nivel = document.getElementById("nivel");
let posicion = document.getElementById("posicion");


//evento submit del form
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

//le doy valor vacio a la caja para que no se superpongan los div
   box.innerHTML = "";

//utilzo fetch para comunicarme con el .json   
fetch('datos.json')
    .then ((res) => res.json())
    .then( (data) => {

       
        //recorro el json y creo el elemento div para desp mostrarlo
        //si el nivel de jugador y la posicion coinciden con la busqueda lo muestro
        data.forEach((jugador) => {
            const div = document.createElement('div');
            div.classList.add("col-4");
            div.classList.add("box-juga");
             if(nivel.value == jugador.nivel && posicion.value == jugador.posicion){
            div.innerHTML = `
                <p class="p-jug">${jugador.nombre}
                    <ul class="lista-jug">
                        <li>Nivel: ${jugador.nivel}</li>
                        <li>Pos: ${jugador.posicion}</li>
                        
                    </ul>

                    <button class="btn-contacto">Contactar</button>
            
              `

             box.append(div);
             }
   
    })

    })

})

