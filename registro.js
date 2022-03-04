

let datos = function(){
    let mail = document.getElementById("email").value;
    let pass1 = document.getElementById("pass").value;
    let nombre = document.getElementById("name").value;

    localStorage.setItem('e-mail',mail);
    localStorage.setItem('pass',pass1);
    localStorage.setItem('name',nombre);

    location.href = "index.html";
}