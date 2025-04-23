export function menuAndOptions() {
    const menuBtn = document.querySelector(".btn-menu");
    const menuOptions = document.querySelector(".menu-options");
    menuOptions.innerHTML='';
    if (!menuBtn || !menuOptions) return;

    menuBtn.addEventListener("click", () => {
        menuOptions.classList.toggle("unhidden"); 
        menuOptions.innerHTML = menuOptions.innerHTML.trim() ? "" : `
            <p><a class='search-suggestions' href="/htmls/categories.html?category=books">Books</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=smartphones">SmartPhones</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=tv">TVs</a></p>
            <p><a class='search-suggestions' href="/htmls/categories.html?category=watches">Watches</a></p>`;// Toggle the sliding effect
    });

    // Optional: Click outside to close the menu
    document.addEventListener("click", (event) => {
        if (!menuBtn.contains(event.target) && !menuOptions.contains(event.target)) {
            menuOptions.classList.remove("active");
        }
    });

}