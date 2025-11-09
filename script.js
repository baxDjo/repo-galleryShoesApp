const shoes = [
  {
    category: "sport",
    shoe: "Nike Air Max",
    price: 120,
    imageUrl: "https://pixabay.com/photos/sneakers-nike-air-max-2529158/"
  },
  {
    category: "sport",
    shoe: "Adidas Ultraboost",
    price: 150,
    imageUrl: "https://pixabay.com/photos/sneakers-running-shoes-adidas-153614/"
  },
  {
    category: "formal",
    shoe: "Clarks Originals",
    price: 110,
    imageUrl: "https://pixabay.com/photos/shoes-leather-shoes-fashion-people-374528/"
  },
  {
    category: "formal",
    shoe: "Timberland Classic",
    price: 140,
    imageUrl: "https://pixabay.com/photos/boots-timberland-shoes-fashion-4833981/"
  },
  {
    category: "luxury",
    shoe: "Gucci Ace",
    price: 550,
    imageUrl: "https://pixabay.com/photos/shoes-fashion-men-style-luxury-593448/"
  },
  {
    category: "luxury",
    shoe: "Louis Vuitton Trainer",
    price: 890,
    imageUrl: "https://pixabay.com/photos/sneakers-shoes-luxury-fashion-6314441/"
  },
  {
    category: "casual",
    shoe: "Converse Chuck Taylor",
    price: 70,
    imageUrl: "https://pixabay.com/photos/shoes-converse-sneakers-footwear-1052253/"
  },
  {
    category: "casual",
    shoe: "Vans Old Skool",
    price: 80,
    imageUrl: "https://pixabay.com/photos/sneakers-vans-shoes-footwear-4202915/"
  },
  {
    category: "hiking",
    shoe: "Salomon X Ultra 4",
    price: 130,
    imageUrl: "https://pixabay.com/photos/hiking-shoes-shoes-hiking-outdoor-1035028/"
  },
  {
    category: "hiking",
    shoe: "Merrell Moab 3",
    price: 115,
    imageUrl: "https://pixabay.com/photos/hiking-boots-travel-shoes-3670277/"
  }
];


let selectContainer = document.querySelector('.select-container');
let productsContainer = document.querySelector('.products-container');


const getCategoryShoes = (shoeCategory) =>{
  const listShoes =
    shoeCategory === "all"
      ? shoes
      : shoes.filter(
          ({ category }) => category === shoeCategory
        );
var result = listShoes
    .map(({ shoe, price }) => {
      return `
          <div class="card">
            <h2>${shoe}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    return result.join("");

}

selectContainer.addEventListener('change', () =>{
    productsContainer.innerHTML = getCategoryShoes(selectContainer.value);
});


