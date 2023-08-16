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