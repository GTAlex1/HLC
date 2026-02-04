window.onload = function() {
    if (localStorage.getItem("sesion") === "si") {
        const loginDiv = document.getElementById("login");
        const contenidoDiv = document.querySelector(".content");
        
        if (loginDiv) loginDiv.style.display = "none";
        if (contenidoDiv) contenidoDiv.style.display = "block";
    }
}

function login() {
    var usuarioInput = document.getElementById("usuario").value;
    var passInput = document.getElementById("password").value;
    var mensajeError = document.getElementById("error");

    if ((usuarioInput === "Alejandro Fernández" && passInput === "Fernández") || 
        (usuarioInput === "Manolo Muelas" && passInput === "Muelas")) {
        
        localStorage.setItem("sesion", "si");
        
        document.getElementById("login").style.display = "none";
        document.querySelector(".content").style.display = "block";
        
    } else {
        mensajeError.innerHTML = "Usuario o contraseña incorrectos";
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesion");
    location.reload(); 
}