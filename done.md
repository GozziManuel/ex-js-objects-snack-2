const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'

---

question 2

const hamburger = {
name: "Cheese Burger",
weight: 250,
ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

2 object

---

question 3

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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// 3 obj

---

question 4
const chef = {
name: "Chef Hyur",
age: 29,
makeBurger: (num = 1) => {
console.log(`Ecco ${num} hamburger per te!`);
},
};

const restaurant = {
name: "Hyur's Burgers",
address: {
street: "Main Street",
number: 123,
},
openingDate: new Date(2025, 3, 11),
isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
const chefCopy = { ...chef };
console.log(chefCopy);
chefCopy.makeBurger();
//shallow copy con spread op. perché mi permette di copiare anche la funzione dell'oggetto dato che con le deep copy non me lo permetterebbe.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
const restaurantCopy = structuredClone(restaurant);
console.log(restaurantCopy);
// deep copy con structuredClone perché mi permette di copiare Date.now nel modo corretto

---

question 5
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
// name: "Hyur's II",
// address: "Second Street, 12",
// isOpen: true,
// },
const secondBurger = { ...hamburger };
// const secondBurger = {
// name: "Cheese Burger",
// weight: 250,
// maker: {
// name: "Anonymous Chef",
// restaurant: {
// name: "Hyur's Burgers",
// address: "Main Street, 123",
// isOpen: true,
// },
// age: 29,
// },
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

---

question 6
const chef = {
name: "Chef Hyur",
age: 29,
makeBurger: (num = 1) => {
console.log(`Ecco ${num} hamburger per te!`);
},
restaurant: {
name: "Hyur's Burgers",
welcomeClient: () => {
console.log("Benvenuto!");
},
address: {
street: "Main Street",
number: 123,
showAddress: () => {
console.log("Main Street 123");
},
},
isOpen: true,
},
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const chefCopy = {
...chef,
restaurant: { ...chef.restaurant },
adress: { ...chef.restaurant.adress },
};
console.log(chefCopy);

// questo è il modo migliore perché mi permette di clonare anche le funzioni presenti nei diversi livelli dell'oggetto ed è un clone perfetto senza una reference
