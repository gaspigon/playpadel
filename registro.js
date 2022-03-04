

let datos = function(){
    let mail = document.getElementById("email").value;
    let pass1 = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass1").value;

    localStorage.setItem('e-mail',mail);
    localStorage.setItem('pass',pass1);
    localStorage.setItem('pass1',pass2);

    location.href = "index.html";
}