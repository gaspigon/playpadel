let busqueda = document.getElementById("search");

//traigo el elemento div donde voy a crear lo capurado de el .json
const box = document.getElementById("row");



busqueda.addEventListener("keyup", (e)=>{
    
    let text = e.target.value;
     
      
//utilzo fetch para comunicarme con el .json   
fetch('torneos.json')
.then ((res) => res.json())
.then( (data) => {

   box.innerHTML = "";
    //recorro el json y creo el elemento div para desp mostrarlo
    //si el nivel de jugador y la posicion coinciden con la busqueda lo muestro
    data.forEach((torneos) => {
        const div = document.createElement('div');
        div.classList.add("col-4");
        div.classList.add("box-torneo");
         if(text == torneos.nivel ){
        div.innerHTML = `
            <p class="p-torneo">${torneos.club}
                <ul class="lista-tor">
                    <li><span style="font-weight: bold">Dia</span>: ${torneos.dia}</li>
                    <li><span style="font-weight: bold">Horario</span>: ${torneos.horario}</li>
                    <li><span style="font-weight: bold">Inscripcion</span>: ${torneos.pago}</li>
    
                    
                </ul>

                <button class="btn-contacto">Inscribirse</button>
        
          `

         box.append(div);
         }

})

})

});