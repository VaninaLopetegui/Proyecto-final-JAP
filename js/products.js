
// Area para integracion de productos en HTML.

const objeto_productos = [];
let container = document.querySelector("#productsContainer")

document.addEventListener("DOMContentLoaded", async () => {
    try {
        let endpoint = "https://japceibal.github.io/emercado-api/cats_products/101.json";
        const res = await fetch(endpoint);
        const data = await res.json();
        const objeto_productos = data;

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
        
    } catch (err) {
        console.error(err);
    }
});