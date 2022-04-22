let busqueda = document.getElementById("search");



busqueda.addEventListener("keyup", (e)=>{
    
    let text = e.target.value;
    let textMostrar = "";
    
        if(text !== ""){
            textMostrar = text;
        }
    document.getElementById("mostrarText").innerHTML = textMostrar;
        

});