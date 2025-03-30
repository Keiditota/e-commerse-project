import { searchResults }from './search.js'
import { menuAndOptions } from './menu.js';
//import { login,checkAdminStatus } from './login.js';
import { viewProducts }from './previewProducts.js';
import { cart } from './cart.js';
import { fetchMarketplaceProducts,fetchBooks } from './apis.js';
import { wishList } from './wishlist.js';
import { hardCodedProducts }from './listOfProducts.js';
//import { categories } from './categories.js';
import { testTiming } from './test.js';



const productsDiv=document.querySelector(".best-seller.phones");

if (window.location.pathname.endsWith("login.html")) {
    import("./login.js")
        .then((module) => {
            module.login(); // Call an initialization function if needed
        })
        .catch((error) => console.error("Failed to load login.js:", error));
}


if (window.location.href.includes("categories.html")) {
    import("./categories.js")
        .then((module) => {
            module.categories(); // Call an initialization function if needed
        })
        .catch((error) => console.error("Failed to load categories.js:", error));
}
if(window.location.href.includes('product.html')){
    import("./previewProducts.js")
        .then((module) => {
            module.viewProducts(); // Call an initialization function if needed
        })
        .catch((error) => console.error("Failed to load categories.js:", error));
}


// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
   // document.querySelector(".btn-menu").addEventListener("click",menuAndOptions);
    menuAndOptions();
    searchResults();
    cart();
    testTiming();
    //categories();
    hardCodedProducts();
    wishList();
    fetchBooks()
    fetchMarketplaceProducts()
        
})          
    
// Only add product-card redirect logic if NOT on wishlist/cart pages
if (!window.location.href.includes('wishlist.html') && 
    !window.location.href.includes('cart.html')) {
    document.addEventListener("click", (event) => {
        // Skip if clicking a button or link
        if (event.target.closest('button, a, .add-to-cart, .remove-from-cart, .add-to-wishlist-btn')) {
            return;
        }

        const productCard = event.target.closest('.product-card');
        if (productCard && !productCard.classList.contains('review')) {
            const productId = productCard.dataset.id;
            window.location.href = `/htmls/product.html?id=${productId}`;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("H5NrwQP8FJMBqAsmB"); // Initialize EmailJS

    const form = document.getElementById('form');
    const btn = document.getElementById('button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Sending...';

        const serviceID = 'service_tocom8c';  // Your actual service ID
        const templateID = 'template_jf8us3m'; // Your actual template ID

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Send Email';
                alert("Subscription Succesfull!");
                form.reset();
            })
            .catch(error => {
                btn.value = 'Send Email';
                alert(`Failed to Subscribe: ${error.text}`);
            });
    });
});

/*
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("H5NrwQP8FJMBqAsmB"); // Initialize EmailJS only once

    const newsletterForm = document.querySelector('form');
    const newsletterEmail = document.querySelector('.newsletter-email');
    const newsletterBtn = document.querySelector('.newsletter-btn');

    if (!newsletterEmail || !newsletterBtn || !newsletterForm) {
        console.error("Newsletter elements not found!");
        return;
    }

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        if (!newsletterEmail.value) {
            alert("Please enter an email address.");
            return;
        }

        emailjs.send("service_tocom8c", "template_jf8us3m", {
            to_email: newsletterEmail.value,  // Make sure this matches your EmailJS template variable!
            from_name: "Aithon Newsletter",
            message: "Thank you for subscribing to our newsletter!", 
            reply_to: "keidimc3@gmail.com"
        })
        .then(response => {
            console.log("Email sent successfully!", response);
            alert("You have successfully subscribed to our newsletter!");
            newsletterEmail.value = ""; // Clear input field
        })
        .catch(error => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
    });
});

*/







    // Event delegation for product clicks
/*
if(!window.location.href.includes('wishlist.html')
    || !window.location.href.includes('cart.html')){
        document.addEventListener("click", (event) => {
        const productCard = event.target.closest('.product-card');
        if(productCard) {
            const productId = productCard.dataset.id;
            window.location.href=`/htmls/product.html?id=${productId}`;
        }
    });
    }
*/

 



