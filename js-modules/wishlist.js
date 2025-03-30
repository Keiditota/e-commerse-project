
export function wishList() {
    const loadWishlist = document.querySelector(".wishlist-list");
    const wishContainer=document.querySelector(".wishlist-container");
    // Load wishlist items on page load
    if (loadWishlist) {
        loadWishlist.innerHTML = "";
        
        const wishlistArray = JSON.parse(localStorage.getItem('wishlist')) || [];
                  
        if (wishlistArray.length === 0) {
            wishContainer.innerHTML = '<h3>... Oops, no products here yet</h3>';

        }else{loadWishlist.innerHTML = wishlistArray.map(product => `
            <figure class="product-card review" 
                    data-id="${product.id}"
                    data-image="${product.image}"
                    data-title="${product.title}"
                    data-description="${product.description}"
                    data-price="${product.price}">
                <img class="product-image review" src="${product.image}" alt="${product.title}">
                <p class="product-name review">${product.title}</p>
                <p class="product-price review">$${product.price}</p>
                <p class="product-description review">${product.description}</p>
                <button class="add-to-wishlist-btn">&#9825;</button>
                <button class="remove-wish-item">Remove from Wishlist</button>
                <button class="add-to-card">🛒Add to Cart</button>
                <button class="buy-now">Buy Now</button>
            </figure>`
        ).join('');}
    }

    // Add event delegation for wishlist buttons
    document.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('add-to-wishlist-btn')) {
            const productCard = e.target.closest('.product-card.review');
            
            if (productCard) {
                const product = {
                    id: productCard.dataset.id,
                    image: productCard.dataset.image,
                    title: productCard.dataset.title,
                    description: productCard.dataset.description,
                    price: productCard.dataset.price
                };

                let wishlistArray = JSON.parse(localStorage.getItem('wishlist')) || [];
                
                // Check if product already exists
                if (!wishlistArray.some(item => item.id === product.id)) {
                    wishlistArray.push(product);
                    localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
                    //preventDefault()//
                } else {
                    
                    //preventDefault()//
                }
            }
        }
    })//remove from wishlist
    document.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('remove-wish-item')) {
           // e.stopPropagation()
           // e.preventDefault()
            const productCard = e.target.closest('.product-card.review');
            const productId=productCard.dataset.id;
            const wishContainer=document.querySelector(".wishlist-container")
            let wishlistArray = JSON.parse(localStorage.getItem('wishlist')) || [];

            // Remove the product from the wishlist array
            wishlistArray = wishlistArray.filter(item => item.id !== productId);
            
            // Update localStorage with the new wishlist
            localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
            

            wishList();

            
}})

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser?.isAdmin) {
        const adminSettings=document.querySelector('.admin-setting')
        adminSettings.style.display = "block";
    }
;

}



