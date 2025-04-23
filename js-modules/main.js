import { searchResults }from './search.js'
import { menuAndOptions } from './menu.js';
import { cart } from './cart.js';
import { wishList } from './wishlist.js';
import { sendMail } from './sendMail.js';
import { checkAdminStatus}from './login.js';
import { testTiming } from './test.js';;



if (window.location.href.includes("login.html")) {
    import("./login.js")
        .then((module) => {
            module.login(); 
        })
        .catch((error) => console.error("Failed to load login.js:", error));
}

if (window.location.href.includes("marketplace.html")) {
    import("./marketplace.js")
        .then((module) => {
            module.marketplace(); 
        })
        .catch((error) => console.error("Failed to load marketplace.js:", error));
}

if (window.location.href.includes("categories.html")) {
    import("./categories.js")
        .then((module) => {
            module.categories(); 
        })
        .catch((error) => console.error("Failed to load categories.js:", error));
}
if(window.location.href.includes('product.html')){
    import("./previewProducts.js")
        .then((module) => {
            module.viewProducts(); 
        })
        .catch((error) => console.error("Failed to load products.js:", error));
}


document.addEventListener('DOMContentLoaded', () => {
    menuAndOptions();
    searchResults();
    cart();
    wishList();
    sendMail()
    checkAdminStatus()
    testTiming();
  
})          


if (!window.location.href.includes('wishlist.html') && 
    !window.location.href.includes('cart.html')) {
    document.addEventListener("click", (event) => {

        if (event.target.closest('button, a, .add-to-cart, .remove-from-cart, .add-to-wishlist-btn')) {
            return;
        }

        const productCard = event.target.closest('.product-card');
        if (productCard && !productCard.classList.contains('review')) {
            const productId = productCard.dataset.id;
            window.location.href = `/htmls/product.html?id=${productId}`;
        }
    });
};



const darkMode = document.querySelector('.dark-mode');
const body = document.body;

// Check localStorage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('activated');
    darkMode.innerHTML = `<img src='/svgs/icons8-sun-48.png' class="dark-mode-icon" alt='light mode' />`;
} else {
    darkMode.innerHTML = `<img src='/svgs/icons8-dark-mode-50.png' class="dark-mode-icon" alt='dark mode' />`;
}

darkMode.addEventListener('click', () => {
    body.classList.toggle("activated");

    if (body.classList.contains("activated")) {
        darkMode.innerHTML = `<img src='/svgs/icons8-sun-48.png' class="dark-mode-icon" alt='light mode' />`;
        localStorage.setItem('darkMode', 'enabled'); 
        
    } else {
        darkMode.innerHTML = `<img src='/svgs/icons8-dark-mode-50.png' class="dark-mode-icon" alt='dark mode' />`;
        localStorage.setItem('darkMode', 'disabled'); // Save preference
    }
});

