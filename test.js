

// the only reason this exists is because of timing issues 
export function testTiming(){
  document.addEventListener('DOMContentLoaded', function() {
    const adminSettings = document.querySelector(".admin-setting");
    const settingDiv = document.querySelector(".setting-div");

    if (adminSettings) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        adminSettings.style.display = currentUser?.isAdmin ? "inline-block" : "none";
    }

    
    adminSettings?.addEventListener('click', (e) => {
        e.stopPropagation();

        if (settingDiv.innerHTML.trim() !== "") {
            settingDiv.innerHTML = "";    
        } else {
            settingDiv.innerHTML = `
                <p><a class="add-products search-suggestions" href="addProducts.html">+ Add Products</a></p>
                <p><a class="log-out search-suggestions">Log Out</a></p>
            `;
        }
    });
});


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("log-out")) {
        console.log("Logging Out...");
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    }
});

}

///notes

/*fetch('https://www.googleapis.com/books/v1/volumes?q=technology&maxResults=40&printType=books&key=AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk')
  .then(res => res.json())

  .then(data => {
    //console.log(data)
    data.items.forEach(book => {
      const booktitle = book.volumeInfo.title;
      const bookauthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
      const bookthumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'no-image.jpg';
      const bookprice = book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.amount + ' ' + book.saleInfo.listPrice.currencyCode : 'Price not available';
      const booksForSale = data.items.filter(book => book.saleInfo && book.saleInfo.saleability === "FOR_SALE");

   
      
    });
    const booksForSale = data.items.filter(book => book.saleInfo && book.saleInfo.saleability === "FOR_SALE");
    booksForSale.forEach(book => {
        console.log("Title:", book.volumeInfo.title);
        console.log("Price:", book.saleInfo.listPrice.amount, book.saleInfo.listPrice.currencyCode);
        console.log("------");
      });
  })

//AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fkZ books apikey
fetch('https://api.api-ninjas.com/v1/computers?type=tablet', {
  headers: { 
    'X-Api-Key': '0wvvMeCv0GPEzclhMv8cEg==rY32WYFSD58lryI4' // Replace with your actual key
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));*/
/*
fetch('https://api.api-ninjas.com/v1/computers?type=monitor', {
  headers: { 'X-Api-Key': '0wvvMeCv0GPEzclhMv8cEg==rY32WYFSD58lryI4' }
})
  .then(response => response.json())
  .then(data => console.log(data));*/