


const box = document.getElementById("row");

// fetch('/datos.json')
//     .then( (res) => res.json())
//     .then( (data) =>{

//         data.forEach((jugador) => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <h4>${jugador.nombre}</h4>
//                 <p>${jugador.nivel}</p>
//                 <p>${jugador.posicion}</p>
//                 <hr/>
//                 `
//                 lista.append(li);
//         })
//     })

const formulario = document.getElementById("form-buscar");

let nivel = document.getElementById("nivel");
let posicion = document.getElementById("posicion");



formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

   box.innerHTML = "";

    
fetch('datos.json')
    .then ((res) => res.json())
    .then( (data) => {

       

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

