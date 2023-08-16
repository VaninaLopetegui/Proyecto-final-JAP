document.getElementById("loginForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    
    if(username!=="" && password!==""){
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("username",username);
    location.href="index.html";
    }else{alert("Usuario invalido");
    }
});
    document.addEventListener("DOMContentLoaded",()=>{
        if(localStorage.getItem("loggedIn")!== "true"){
        location.href="login.html"
    }
    });
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
