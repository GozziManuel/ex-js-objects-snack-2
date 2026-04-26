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
