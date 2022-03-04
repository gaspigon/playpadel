//let sesion = document.getElementById("submit").value;



/*
document.getElementById("submit").addEventListener('click',function(){
    console.log("hola");
    console.log(email);
    console.log(contraseña);
});

*/

let valorEmail = localStorage.getItem('e-mail');
let valorContraseña = localStorage.getItem('pass');
let valorContraseña2 = localStorage.getItem('pass1');

console.log(valorEmail,valorContraseña,valorContraseña2);



let getData =  function(){
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("pass").value;

    if(email === valorEmail && contraseña === valorContraseña){
        console.log("datos correctos");
        location.href = "paginaprincipal.html";
    }else{
        console.log("datos incorrectos");
        alert("Datos Incorrectos");
    }
}

