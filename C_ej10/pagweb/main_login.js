function login() {
 const usuario = document.getElementById("usuario").value;
 const password = document.getElementById("password").value;
 // Credenciales válidas (ejemplo)
 if (usuario === "Alejandro Fernández" && password === "Fernández" || usuario === "Manolo Muelas" && password === "Muelas") {
 document.getElementById("login").style.display = "none";
 document.getElementById("contenido").style.display = "block";
 } else {
document.getElementById("error").textContent = "Usuario o contraseña incorrectos";
 }
 }