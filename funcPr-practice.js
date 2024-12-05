const shoppingCart = [
  { product: "노트북", cost: 1200000, count: 1 },
  { product: "마우스", cost: 35000, count: 2 },
  { product: "키보드", cost: 89000, count: 1 }
];

let totalCost = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  totalCost += shoppingCart[i].cost * shoppingCart[i].count;
}
console.log(`Total Cost: ${totalCost}`);

totalCost = 0;
shoppingCart.forEach(item => totalCost += item.cost * item.count);
console.log(`Total Cost: ${totalCost}`);

totalCost = shoppingCart.reduce((sum, item) => sum + item.cost * item.count, 0);
console.log(`Total Cost: ${totalCost}`);

const productTotals = shoppingCart.map(item => ({
  product: item.product,
  total: item.cost * item.count
}));
console.log('Product Totals:', productTotals);

const people = ['alice', 'bob', 'charlie'];

const uppercasePeople = people.map(name => name.toUpperCase());
console.log(`Uppercase Names: ${uppercasePeople}`);

const capitalizedPeople = people.map(name => name[0].toUpperCase() + name.slice(1));
console.log(`Capitalized Names: ${capitalizedPeople}`);
