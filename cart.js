export function cart() {
    
    function renderCart() {
        const loadCartList = document.querySelector(".cart-list");
        const cartContainer = document.querySelector(".cart-container");
        const cartH1=document.querySelector(".cart-h1");
        if (loadCartList) {
            loadCartList.innerHTML = "";
            const cartListArray = JSON.parse(localStorage.getItem('cart')) || [];

            if (cartListArray.length === 0) {
                cartContainer.innerHTML = '<h3>... Oops, no products here yet</h3>';
            } else {
                cartH1.innerHTML=`<h1>Your Cart</h1>`;
                loadCartList.innerHTML = cartListArray.map(product => `
                    <figure class="product-card review" 
                            data-id="${product.id}">
                        <img class="product-image review" src="${product.image}" alt="${product.title}">
                        <p class="product-name review">${product.title}</p>
                        <p class="product-price review">$${product.price}</p>
                        <p class="product-description review">${product.description}</p>
                        <p class="quantity">${product.quantity || 1}</p>
                        <button class="add-to-cart">&#9825;</button>
                        <button class="buy-now">Buy Now</button>
                        <button class="remove-from-cart">Remove from Cart</button>
                    </figure>`
                ).join('');
            }
        }
    } 

    
    renderCart();

    
    document.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart')) {
            const productCard = e.target.closest('.product-card.review');
            
            if (productCard) {
                const product = {
                    id: productCard.dataset.id,
                    image: productCard.dataset.image,
                    title: productCard.dataset.title,
                    description: productCard.dataset.description,
                    price: productCard.dataset.price,
                    quantity: 1
                };
                
                let cartListArray = JSON.parse(localStorage.getItem('cart')) || [];
                const existingProduct = cartListArray.find(item => item.id === product.id);
                
                if (existingProduct) {
                    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
                    alert('Quantity updated in cart!');
                } else {
                    cartListArray.push(product);
                    localStorage.setItem('cart', JSON.stringify(cartListArray));
                    alert('Added to Cart!');
                }
                
                localStorage.setItem('cart', JSON.stringify(cartListArray));
                renderCart(); 
            }
        }
    });
    document.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('remove-from-cart')) {
            const productCard = e.target.closest('.product-card.review');
            const productId=productCard.dataset.id;
            
            let cartListArray = JSON.parse(localStorage.getItem('cart')) || [];

            
            cartListArray = cartListArray.filter(item => item.id !== productId);
            
            
            localStorage.setItem('cart', JSON.stringify(cartListArray));
            renderCart()
        }})
        
            
}

document.addEventListener("DOMContentLoaded",cart);