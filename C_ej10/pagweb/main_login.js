function login() {
    // 1. Obtenemos los valores de los inputs
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const loginDiv = document.getElementById("login-container");
    const contenidoDiv = document.getElementById("contenido");
    const mensajeError = document.getElementById("error");

    // 2. Validación de credenciales
    if ((usuario === "Alejandro Fernández" && password === "Fernández") || 
        (usuario === "Manolo Muelas" && password === "Muelas")) {
        
        // ÉXITO: Ocultamos login y mostramos multimedia
        loginDiv.style.display = "none";
        contenidoDiv.classList.remove("oculto");
        
    } else {
        // ERROR: Mostramos mensaje
        mensajeError.textContent = "Usuario o contraseña incorrectos";
    }
}

function cerrarSesion() {
    // Recarga la página para resetear el estado y volver al login
    location.reload();
}