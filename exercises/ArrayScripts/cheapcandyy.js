"use strict";
// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?
let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Sour Patch Kids", price: 1.99 },
  { product: "Reeses Pieces", price: 3.46 },
  { product: "Haribo Cola Gummies", price: 7.36 },
  { product: "Juicy Fun Bugs", price: 0.99 },
  { product: "KitKat", price: 1.54 },
  { product: "Herseys Kisses", price: 0.49 },
];
console.log("Candies Under $5");
let underFour = [];
for (let count = 0; count < products.length; count++) {
  const product = products[count];
  if (product.price <= 5) {
    underFour.push(product);
  }
}
console.log(underFour);

console.log("M&M Candies");
for (let index = 0; index < products.length; index++) {
  const product = products[index];
  //product.product is the name of the product
  if (product.product.indexOf("M&Ms") != -1) {
    console.log(product);
  }
}
console.log("Do we have?");
for (let index = 0; index < products.length; index++) {
  const product = products[index];
  //product.product is the name of the product
  if (product.product.indexOf("Swedish Fish") != -1) {
    console.log(product);
    return;
  }
}
