
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
        
        let products =data;
        filterSelect.addEventListener("change", () => {
            const selected = filterSelect.value;
          
            if (selected === "asc") {
              const sorted = [...products].sort((a, b) => a.price - b.price);
              renderProducts(sorted);
            } else if (selected === "desc") {
              const sorted = [...products].sort((a, b) => b.price - a.price);
              renderProducts(sorted);
            } else {
              // Reset to default
              renderProducts(products);
             
            }
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
        bookHeader.innerHTML = `<h1>Smartphones</h1>`;
        bookContainer.innerHTML = '';

    
        let products = hardCodedProducts().filter(product => product.category === "smartphones");
        const filterSelect = document.querySelector('.select-filter');
        // Render products initially
        
        renderProducts(products);
        
       
        // brand     
       
        const phonebrandsList = document.querySelector('.phone-brands-list');
        const btnResults = document.querySelector('.btn-results');
    
   
         //brand finish 

        // price ascending
        filterSelect.addEventListener("change", () => {
            const selected = filterSelect.value;
          
            if (selected === "asc") {
              phonebrandsList.style.display = "none";
              const sorted = [...products].sort((a, b) => a.price - b.price);
              renderProducts(sorted);
            } else if (selected === "desc") {
                phonebrandsList.style.display = "none";
              const sorted = [...products].sort((a, b) => b.price - a.price);
              renderProducts(sorted);
            } else if (selected === "brand") {
              phonebrandsList.style.display = "block";
              btnResults.addEventListener('click', () => {
                const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked'))
                    .map(checkbox => checkbox.value.toLowerCase()); 
                let filteredProducts = products; 
                if (selectedBrands.length > 0) {
                    filteredProducts = products.filter(product => 
                        selectedBrands.includes(product.brand.toLowerCase()) 
                    );}
                renderProducts(filteredProducts);
            });
            } else {
              // Reset to default
              renderProducts(products);
              phonebrandsList.style.display = "none";
            }
          });
          
          




       //final rendering function
        function renderProducts(productList) {
            bookContainer.innerHTML = '';
            productList.forEach(product => {
                bookContainer.innerHTML += `
                    <figure class="product-card tv" data-id="${product.id}"
                            data-image="${product.image}"
                            data-title="${product.title}"
                            data-description="${product.description}"
                            data-price="${product.price}"
                            data-brand="${product.brand}">
                        <img class="product-img" src="${product.image}" alt="${product.title}">
                        <p class="device-name">${product.title}</p>
                        <p class="device-name">${product.description}</p>
                        <p class="price">$${product.price}</p>
                    </figure>`;
            });
        }
    }
        
    else if (category === "tv") {
        bookHeader.innerHTML = `<h1>TVs</h1>`;
        bookContainer.innerHTML = '';
    
        let products = hardCodedProducts().filter(product => product.category === "tv");
        // Render products initially
        renderProducts(products);
        /// brand starting
        const filterSelect = document.querySelector('.select-filter');
        const tvbrandsList = document.querySelector('.tv-brands-list');
        const btnResults = document.querySelector('.btn-results-2');
    
    
        //filter ascend -descend
        filterSelect.addEventListener("change", () => {
            const selected = filterSelect.value;
          
            if (selected === "asc") {
              const sorted = [...products].sort((a, b) => a.price - b.price);
              renderProducts(sorted);
            } else if (selected === "desc") {
              const sorted = [...products].sort((a, b) => b.price - a.price);
              renderProducts(sorted);
            } else if (selected === "brand") {
              tvbrandsList.style.display = "block";
              btnResults.addEventListener('click', () => {
                const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked'))
                    .map(checkbox => checkbox.value.toLowerCase()); 
                let filteredProducts = products; 
                if (selectedBrands.length > 0) {
                    filteredProducts = products.filter(product => 
                        selectedBrands.includes(product.brand.toLowerCase()) 
                    );}
                renderProducts(filteredProducts);
            });
            } else {
              // Reset to default
              renderProducts(products);
              tvbrandsList.style.display = "none";
            }
          });

        ///rendering final function
        function renderProducts(productList) {
            bookContainer.innerHTML = '';
            productList.forEach(product => {
                bookContainer.innerHTML += `
                    <figure class="product-card tv" data-id="${product.id}"
                            data-image="${product.image}"
                            data-title="${product.title}"
                            data-description="${product.description}"
                            data-price="${product.price}"
                            data-brand="${product.brand}">
                        <img class="product-img-tv" src="${product.image}" alt="${product.title}">
                        <p class="device-name">${product.title}</p>
                        <p class="device-name">${product.description}</p>
                        <p class="price">$${product.price}</p>
                    </figure>`;
            });
        }
    }
    
    
    bookContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    if (card) {
        const id = card.dataset.id;
        window.location.href = `/htmls/product.html?id=${id}`;
    }
    });
   
}