import { searchResults }from './search.js'
import { menuAndOptions } from './menu.js';
import { fetchMarketplaceProducts } from './apis.js';

const btnSubmit =document.querySelector(".btn-submit");
const searchBar =document.querySelector(".search-btn");
const aithonLogo=document.querySelector(".logo");
const navBar=document.querySelector(".navigation");
const menuBtn=document.querySelector(".btn-menu");
const apiExperiment=document.querySelector(".experiment");
const productsDiv=document.querySelector(".best-seller.experi");
const productDetails=document.querySelector(".product-details");
const searchDiv = document.querySelector(".search");
const bookContainer=document.querySelector(".best-seller.book");
const experi=document.querySelector(".experi");
const addToWishlistBtn =document.querySelector(".add-to-wishlist-btn");
const productCard = document.querySelector('.product-card.review');
//fetch marketplace
/*fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then(data=>{
        products=data;
        runExperiment();
        searchResults();
    })*/
//////fetch books

searchResults();
menuAndOptions();
fetchMarketplaceProducts();
/*
let products=[]
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(apiData => {
    products = apiData;
    runExperiment();
    
});*/
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser?.isAdmin) {
        adminSettings.style.display = "block";
    }
});

let products=[]
fetchMarketplaceProducts()
    .then(data=>{
        products=data;
        runExperiment();
    })

  //AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk
////AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk

const runExperiment=()=>{
   

    experi.innerHTML="";
    products.forEach(product=>{
    experi.innerHTML += `
    
        <figure class="product-card" data-id="${product.id}">
            <img class="product-img" src="${product.image}">
            <p class="device-name">${product.title}</p>
            <p class="price">$${product.price}</p>
        </figure>
    `
     });
         
}


productsDiv.addEventListener("click",(event)=>{
    const productCard = event.target.closest('.product-card');
    if(productCard){
        const productId = productCard.dataset.id;
        window.location.href=`product.html?id=${productId}`
    }
})


/*const searchResults=()=>{
    searchBar.addEventListener('input',(e)=>{
        const searchTerm =e.target.value;
        searchDiv.innerHTML=""
        let limitedSearchList=[]
        products.filter((product)=>{
            if(searchTerm.trim()==""||searchTerm==null){
                searchDiv.innerHTML="";
                return;
            }
            else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                
                limitedSearchList.push({id:product.id, title:product.title});
               }});
        limitedSearchList=limitedSearchList.slice(0,5);
        limitedSearchList.forEach((product)=>searchDiv.innerHTML+=`
        <p><a class='search-suggestions' href="product.html?id=${product.id}" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg> ${product.title}</a></p>
    `)})
}*/