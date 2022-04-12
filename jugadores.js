const lista = document.getElementById("listado");
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






fetch('datos.json')
    .then ((res) => res.json())
    .then( (data) => {


        data.forEach((jugador) => {
            const p = document.createElement('p');
             if(nivel.value == jugador.nivel && posicion.value == jugador.posicion){
            p.innerHTML = `
                        <div clas="col-4">
                            <h4>${jugador.nombre}</h4>
                            <p>${jugador.nivel}</p>
                            <p>${jugador.posicion}</p>
                        </div>            
              `

             box.append(p);
             }
   
    })

    })

})

