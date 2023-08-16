// Area para codigo de fetch al API.
let endpoint = "https://japceibal.github.io/emercado-api/cats/cat.json";
fetch(endpoint)

  .then(res => res.json())
  .then(data => { const objeto_productos = data;
   categorias(objeto_productos); 
  })
  .catch(err => err)

  function categorias(objeto_productos) {
    const container = document.querySelector("#productsContainer");
  

// Area para integracion de productos en HTML.

    for(let producto of objeto_productos.products) {
        container.innerHTML += `
        <div class="row justify-content-start">
            <div class="col-4">
                <img width="100%" src="./${producto.image}" alt="${producto.name}">
            </div>
            <div class="col-4">
                <h2>${producto.name} - ${producto.cost}</h2>
                <p>${producto.description}</p>
            </div>
            <div class="col-4">
                <p>${producto.soldCount} Vendidos</p>
            </div>
        </div>`
    }
}

document.addEventListener("DOMContentLoaded", () => {

});