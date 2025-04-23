// here i will place all my apis so that iam not repeating code.

// In apis.js
export async function fetchMarketplaceProducts() {
  try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
  } catch (error) {
      console.error('Failed to fetch products:', error);
      return []; // Return empty array as fallback
  }
}
export async function fetchBooks() {
  try {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=technology&maxResults=40&printType=books&key=AIzaSyBnPaJq9DnQqYCLqu9Whhvl3Av401276fk');
    if (!res.ok) throw new Error('Network error');
    return res.json();
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return { items: [] }; // Return empty fallback
  }
}