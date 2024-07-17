import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");
const listaCard= document.querySelector("[data-product]")
let id = 0;

function createCard (name, price, image, id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-container">
            <img src="${image}" alt="${name}">
        </div>

        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="img/borrar.png" alt="">
                </button>
            </div>
        </div>                
    `;
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        servicesProducts
        .deleteProducto(id)
        .then(() => {
            card.remove();
        })
        
        .catch((err) => console.log(err));
    }); 
    
listaCard.appendChild(card);           
productContainer.appendChild(card);
return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach((product) => {
            productContainer.appendChild(
                createCard(product.name, product.price, product.image, product.id));           
        });
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
    id++;

    servicesProducts
    .createProducts(name, price, image, id)  
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});



render();

