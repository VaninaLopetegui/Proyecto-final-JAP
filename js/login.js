document.getElementById("loginForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("username",username);
    
    if(username!=="" && password!==""){
    location.href="index.html";
    }else{alert("Usuario invalido");
    }
    
    });