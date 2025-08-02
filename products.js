const products = [
  { name: "Smartphone", price: 699, rating: 4.5, category: "Electronics" },
  { name: "T-Shirt", price: 29, rating: 4.2, category: "Clothing" },
  { name: "Laptop", price: 1200, rating: 4.8, category: "Electronics" },
  { name: "Jeans", price: 49, rating: 4.0, category: "Clothing" },
];

function filterAndSortProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;

  let filtered = category === "All" ? products : products.filter(p => p.category === category);

  if (sort === "asc") {
    filtered.sort((a, b) => a.rating - b.rating);
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

function displayProducts(productArray) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  productArray.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    `;
    container.appendChild(card);
  });
}

filterAndSortProducts();