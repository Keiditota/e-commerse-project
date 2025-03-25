
export function menuAndOptions(){
const menuBtn=document.querySelector(".btn-menu");
const menuOptions=document.querySelector(".menu-options");
menuBtn.addEventListener('click',()=>{
    menuOptions.innerHTML="";
    menuOptions.innerHTML=`
    <p><a class='search-suggestions' href=categories.html?category=books>Books</a></p>
    <p><a class='search-suggestions' href=categories.html?category=smartphones>SmartPhones</a></p>
    <p><a class='search-suggestions' href=categories.html?category=tv>Tv</a></p>
    <p><a class='search-suggestions' href=categories.html?category=watches>Watches</a></p>
    `
}) 
}