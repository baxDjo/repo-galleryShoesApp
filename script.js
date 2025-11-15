const shoes = [
  {
    category: "sport",
    shoe: "Nike Air Max",
    price: 120,
    imageUrl: "./images/imgCasual1.png"
  },
  {
    category: "sport",
    shoe: "Adidas Ultraboost",
    price: 150,
    imageUrl: "./images/imgCasual2.png"
  },
  {
    category: "formal",
    shoe: "Clarks Originals",
    price: 110,
    imageUrl: "./images/imgFormal1.png"
  },
  {
    category: "formal",
    shoe: "Timberland Classic",
    price: 140,
    imageUrl: "./images/imgFormal2.png"
  },
  {
    category: "luxury",
    shoe: "Gucci Ace",
    price: 550,
    imageUrl: "./images/imgLuxury1.png"
  },
  {
    category: "luxury",
    shoe: "Louis Vuitton Trainer",
    price: 890,
    imageUrl: "./images/imgLuxury2.png"
  },
  {
    category: "casual",
    shoe: "Converse Chuck Taylor",
    price: 70,
    imageUrl: "./images/imgCasual1.png"
  },
  {
    category: "casual",
    shoe: "Vans Old Skool",
    price: 80,
    imageUrl: "./images/imgCasual1.png"
  },
  {
    category: "hiking",
    shoe: "Salomon X Ultra 4",
    price: 130,
    imageUrl: "./images/imgHiking1.png"
  },
  {
    category: "hiking",
    shoe: "Merrell Moab 3",
    price: 115,
    imageUrl: "./images/imgHiking2.png"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  let selectContainer = document.querySelector('.select-container');
  let productsContainer = document.querySelector('.products-container');

  const getCategoryShoes = (shoeCategory) => {
    const listShoes =
      shoeCategory === "all"
        ? shoes
        : shoes.filter(({ category }) => category === shoeCategory);

    const result = listShoes.map(({ shoe, price, imageUrl }) => {
      return `
        <div class="card" style="width: 18rem;">
          <img src="${imageUrl}" class="img-fluid rounded" alt="${shoe}">
          <div class="card-body">
            <h5 class="card-title">${shoe}</h5>
            <p class="card-text">$${price}</p>
          </div>
        </div>
      `;
    });

    return result.join("");
  };

  // 🔁 Quand on change de catégorie
  selectContainer.addEventListener('change', () => {
    productsContainer.innerHTML = getCategoryShoes(selectContainer.value);
  });

  // 🟢 AU DÉMARRAGE : on affiche TOUT (All)
  selectContainer.value = "all";
  productsContainer.innerHTML = getCategoryShoes("all");
});
