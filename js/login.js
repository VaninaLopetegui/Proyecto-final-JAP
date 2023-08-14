document.getElementById("loginButton").addEventListener("click", function() {
    // Obtén el valor del campo de contraseña
    let password = document.getElementById("password").value;

    // Verifica si la contraseña cumple con los criterios (por ejemplo, al menos 6 caracteres)
    if (password.length >= 6) {
        // Redirige al usuario a la página de inicio
        window.location.href = "index.html";
    } else {
        alert("La contraseña debe tener al menos 6 caracteres.");
    }
});
