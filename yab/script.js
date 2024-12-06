// Función para redirigir al formulario de registro
function goToRegister() {
    document.getElementById("intro").classList.add("hidden"); // Oculta la pantalla de intro
    document.getElementById("register").classList.remove("hidden"); // Muestra el registro
}

// Función para redirigir al login (opcional, si decides agregarlo)
function goToLogin() {
    document.getElementById("register").classList.add("hidden"); // Oculta el registro
    document.getElementById("login").classList.remove("hidden"); // Muestra el login
}


// Transición automática desde la intro al login (puedes desactivarla si no es necesaria)
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("login").classList.remove("hidden");
    }, 7000); // 3 segundos
});
