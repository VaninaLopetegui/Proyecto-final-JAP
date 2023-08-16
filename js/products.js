// Area para codigo de fetch al API.
let endpoint = "https://japceibal.github.io/emercado-api/cats/cat.json";
fetch(endpoint)

  .then(res => res.json())
  .then(data => {  const objeto_productos = data;
    categorias(data) 
    })
  .catch(err => err)

  function categorias(data) {
    console.log(data);
    let objCategorias = data;
  }
    const objeto_productos = JSON.parse(`{"catID":101,"catName":"Autos","products":[{"id":50921,"name":"Chevrolet Onix Joy","description":"Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.","cost":13500,"currency":"USD","soldCount":14,"image":"img/prod50921_1.jpg"},{"id":50922,"name":"Fiat Way","description":"La versión de Fiat que brinda confort y a un precio accesible.","cost":14500,"currency":"USD","soldCount":52,"image":"img/prod50922_1.jpg"},{"id":50923,"name":"Suzuki Celerio","description":"Un auto que se ha ganado la buena fama por su economía con el combustible.","cost":12500,"currency":"USD","soldCount":25,"image":"img/prod50923_1.jpg"},{"id":50924,"name":"Peugeot 208","description":"El modelo de auto que se sigue renovando y manteniendo su prestigio en comodidad.","cost":15200,"currency":"USD","soldCount":17,"image":"img/prod50924_1.jpg"},{"id":50925,"name":"Bugatti Chiron","description":"El mejor hiperdeportivo de mundo. Producción limitada a 500 unidades.","cost":3500000,"currency":"USD","soldCount":0,"image":"img/prod50925_1.jpg"}]}`)
// Area para integracion de productos en HTML.

const container = document.querySelector("#productsContainer");

document.addEventListener('DOMContentLoaded', () => {
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
})