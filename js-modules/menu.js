export function menuAndOptions() {
    const menuBtn = document.querySelector(".btn-menu");
    const menuOptions = document.querySelector(".menu-options");
    
    if (!menuBtn || !menuOptions) return;

    menuBtn.addEventListener('click', () => {
        menuOptions.innerHTML = menuOptions.innerHTML.trim() ? "" : `
            <p><a class='search-suggestions' href="/htmls/categories.html?category=books">Books</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=smartphones">SmartPhones</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=tv">TVs</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=watches">Watches</a></p>`;
    });
}