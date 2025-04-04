import { fetchMarketplaceProducts } from './apis.js';

export function marketplace() {
    const productsDiv = document.querySelector(".best-seller.experi");
    const experi = document.querySelector(".experi");

    if (!productsDiv || !experi) {
        console.error("Marketplace elements not found in the DOM");
        return;
    }

    let products = [];

    const runExperiment = () => {
        experi.innerHTML = "";
        products.forEach(product => {
            experi.innerHTML += `
                <figure class="product-card" data-id="${product.id}">
                    <img class="product-img" src="${product.image}">
                    <p class="device-name">${product.title}</p>
                    <p class="price">$${product.price}</p>
                </figure>
            `;
        });
    };

    fetchMarketplaceProducts()
        .then(data => {
            products = data;
            runExperiment();

            // Add event listener inside the `then()` block
            productsDiv.addEventListener("click", (event) => {
                const productCard = event.target.closest('.product-card');
                if (productCard) {
                    const productId = productCard.dataset.id;
                    window.location.href = `/htmls/product.html?id=${productId}`;
                }
            });
        })
        .catch(error => console.error("Error fetching products:", error));
    
}
