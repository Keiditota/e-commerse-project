import { fetchMarketplaceProducts,fetchBooks } from "./apis.js";
import { hardCodedProducts } from "./listOfProducts.js";
export function viewProducts(){
   
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Full list of your hardcoded products from index.html and marketplace.html and listOfProducts.js
    const customProducts = hardCodedProducts()
    
    // Check if the product is custom
    const customProduct = customProducts.find(p => p.id === productId);

    if (customProduct) {
        renderProduct(customProduct);
    } else if (Number(productId)>=1 && Number(productId)<=20){
        // Fallback to API if not custom
        fetchMarketplaceProducts().then(data=>{
            const product = data.find(p => p.id === Number(productId));
            renderProduct({
                id:productId,
                title:product.title,
                description:product.description,
                price:product.price,
                image:product.image
            });
        })
        
    }else {//if i add more book data i need to change it
        fetchBooks().then(data => {
            const book = data.items.find(book => book.id === productId); // Compare with the real ID
            renderProduct({
                id: book.id,
                title: book.volumeInfo.title,
                description: book.volumeInfo.description || 'No description available',
                price: book.saleInfo.listPrice?.amount || 'N/A',
                image: book.volumeInfo.imageLinks?.thumbnail || 'no-image.jpg'
            });
        });
        

    }
    




    function renderProduct(product) {
        document.querySelector(".product-details").innerHTML = `
        <figure class="product-card review" data-id="${product.id}"
                data-image="${product.image}"
                data-title="${product.title}"
                data-description="${product.description}"
                data-price="${product.price}">
            <img class="product-image review" src="${product.image}" alt="${product.title}">
            <p class="product-name review">${product.title}</p>
            <p class="product-price review">$${product.price}</p>
            <p class="product-description review">${product.description}</p>
            <button class="add-to-wishlist-btn">&#9825;</button>
            <button class="add-to-cart">🛒Add to Cart</button>
        </figure>`;
    }
    wishList();
    cart();




}