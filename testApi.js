fetch('https://www.googleapis.com/books/v1/volumes?q=technology&maxResults=40&printType=books&key=AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk')
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

//AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fkZ