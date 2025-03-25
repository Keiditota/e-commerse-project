import { fetchMarketplaceProducts } from "./apis.js";
import {fetchBooks} from "./apis.js";
let products=[]

const customProducts = [
    { id: 21, title: "iPhone 16 5G 8GB/256GB" },
    { id: 22, title: "SAMSUNG GALAXY S25 ULTRA" },
    { id: 23, title: "iPhone 15 5G 6GB/512GB" },
    { id: 24, title: "Redmi 13C NFC 4GB/128GB Navy Blue" }
];

export function searchResults(){
    const searchDiv = document.querySelector(".search");
    const searchBar =document.querySelector(".search-btn");
    Promise.all([
        fetchMarketplaceProducts(),
        fetchBooks()
    ]).then(([marktdata,bookdata]) => {

        const booksForSale = bookdata.items.filter(book =>
            book.saleInfo && book.saleInfo.saleability === "FOR_SALE"
        ).map(book => {
            
            return{
                id: book.id, // give unique book IDs
                title: book.volumeInfo.title
            }
            
        });
        products =[...marktdata, ...booksForSale, ...customProducts]
    // Store fetched products
   
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
})
}