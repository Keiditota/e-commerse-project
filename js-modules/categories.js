
import { fetchBooks } from "./apis.js";
import { hardCodedProducts } from "./listOfProducts.js";

export function categories(){
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const bookContainer = document.querySelector(".best-seller.book");
    
    const bookHeader=document.querySelector(".book-header")
    if (category === "books") {
        
        bookHeader.innerHTML=""
        bookHeader.innerHTML=`<h1>Books</h1>
        <h3>Immerse yourself into our finest collection of books</h3>`
        fetchBooks().then(data => {
            loadBooks(data);
        });

        

        function loadBooks(books){
            bookContainer.innerHTML="";
            
            const booksForSale = books?.items.filter(book => book.saleInfo && book.saleInfo.saleability === "FOR_SALE");
            booksForSale.forEach(book => {
                
                bookContainer.innerHTML+=`
                <figure class="product-card" data-id="${book.id}">
                    <img class="product-img" src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'no-image.jpg'}">
                    <p class="device-name brand author">${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                    <p class="device-name">${book.volumeInfo.title}</p>
                    <p class="price">$${book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.amount + ' ' + book.saleInfo.listPrice.currencyCode : 'Price not available'}</p>
                </figure>
            `;
        })};


        
    } else if (category === "smartphones") {
        
        bookHeader.innerHTML=""
        bookHeader.innerHTML=`<h1>Smartphones</h1>`

        bookContainer.innerHTML=''
     
        const products = hardCodedProducts().filter(product => product.category === "smartphones");
        products.forEach(product=>{
            bookContainer.innerHTML += `
            <figure class="product-card" data-id="${product.id}"
                    data-image="${product.image}"
                    data-title="${product.title}"
                    data-description="${product.description}"
                    data-price="${product.price}">
                <img class="product-img" src="${product.image}" alt="${product.title}">
                <p class="device-name">${product.title}</p>
                <p class="price ">$${product.price}</p>
                <p class="device-name">${product.description}</p>
                <button class="add-to-wishlist-btn">&#9825;</button>
                <button class="add-to-cart">🛒Add to Cart</button>
            </figure>`;
        
    })}else if (category === "tv") {
        
        bookHeader.innerHTML=""
        bookHeader.innerHTML=`<h1>TVs</h1>`

        bookContainer.innerHTML=''
     
        const products = hardCodedProducts().filter(product => product.category === "tv");
        products.forEach(product=>{
            bookContainer.innerHTML += `
            <figure class="product-card" data-id="${product.id}"
                    data-image="${product.image}"
                    data-title="${product.title}"
                    data-description="${product.description}"
                    data-price="${product.price}">
                <img class="product-img-tv" src="${product.image}" alt="${product.title}">
                <p class="device-name">${product.title}</p>
                <p class="price ">$${product.price}</p>
                <p class="device-name">${product.description}</p>
                <button class="add-to-wishlist-btn">&#9825;</button>
                <button class="add-to-cart">🛒Add to Cart</button>
            </figure>`;
        
    })}

        
    

    bookContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    if (card) {
        const id = card.dataset.id;
        window.location.href = `/htmls/product.html?id=${id}`;
    }
    });

}