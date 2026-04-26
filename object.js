const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
// restaurant: {
//       name: "Hyur's II",
//       address: "Second Street, 12",
//       isOpen: true,
//     },
const secondBurger = { ...hamburger };
// const secondBurger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
console.log(hamburger.maker.name); // "Chef Hyur"
console.log(secondBurger.maker.name); // "Chef Hyur"
console.log(hamburger.maker.restaurant.name); // "Hyur's II"
console.log(secondBurger.maker.restaurant.name); // "Hyur's II"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 5
