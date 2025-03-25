import {searchResults}from './search.js'
import { menuAndOptions } from './menu.js';

const btnSubmit =document.querySelector(".btn-submit");
const searchBar =document.querySelector(".search-btn");
const aithonLogo=document.querySelector(".logo");
const navBar=document.querySelector(".navigation");
const menuBtn=document.querySelector(".btn-menu");
const apiExperiment=document.querySelector(".experiment");
const searchBtn=document.querySelector(".btn-submit");
const searchDiv=document.querySelector(".search");
const productsDiv=document.querySelector(".best-seller.phones");
const menuOptions=document.querySelector(".menu-options");


searchResults(); // search.js searches for products;

menuAndOptions();//menu.js menu

/*
menuBtn.addEventListener('click',()=>{
    menuOptions.innerHTML="";
    menuOptions.innerHTML=`
    <p><a class='search-suggestions' href=categories.html?category=books>Books</a></p>
    <p><a class='search-suggestions' href=categories.html?category=smartphones>SmartPhones</a></p>
    <p><a class='search-suggestions' href=categories.html?category=tv>Tv</a></p>
    <p><a class='search-suggestions' href=categories.html?category=watches>Watches</a></p>
    `
}) */





productsDiv.addEventListener("click",(event)=>{
    const productCard = event.target.closest('.product-card');
    if(productCard){
        const productId = productCard.dataset.id;
        window.location.href=`product.html?type=custom&id=${productId}`
    }
})

