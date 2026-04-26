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
//shallow copy  con spread op. perché mi permette di copiare anche la funzione dell'oggetto dato che con le deep copy non me lo permetterebbe.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
const restaurantCopy = structuredClone(restaurant);
console.log(restaurantCopy);
// deep copy con structuredClone perché mi permette di copiare Date.now nel modo corretto
