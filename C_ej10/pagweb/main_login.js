window.onload = function() {
    if (localStorage.getItem("sesion") === "si") {
        if (document.getElementById("login")) document.getElementById("login").style.display = "none";
        if (document.querySelector(".content")) document.querySelector(".content").style.display = "block";
    }
}

function login() {
    var usuarioInput = document.getElementById("usuario").value;
    var passInput = document.getElementById("password").value;
    var mensajeError = document.getElementById("error");

    if ((usuarioInput === "Alejandro" && passInput === "Fernández") || 
        (usuarioInput === "Manolo" && passInput === "Muela")) {
        
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