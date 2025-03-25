// here i will place all my apis so that iam not repeating code.

export async function fetchMarketplaceProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  }
  
  export async function fetchBooks() {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=technology&maxResults=40&printType=books&key=AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk');
    return res.json();
  }
  