document.getElementById("loginForm").addEventListener("submit",(e)=>{
e.preventDefault();

const username=document.getElementById("username").value;
const pasword=document.getElementById("pasword").value;

localStorage.setItem("loggedIn","true");
localStorage.setItem("username",username);

});