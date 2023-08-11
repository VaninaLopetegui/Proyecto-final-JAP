document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


let endpoint = "https://japceibal.github.io/emercado-api/cats/cat.json";
fetch(endpoint)

  .then(res => res.json())
  .then(data => categorias(data))
  .catch(err => err)

  function categorias(data) {
    console.log(data);
    let objCategorias = data;
  }