"use strict";
let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function calculateSubtotal(lunch) {
  let subtotal = 0;
  for (let index = 0; index < lunch.length; index++) {
    const item = lunch[index];
    subtotal += item.price;
  }
  return subtotal;
}

function addTip(subtotal, tipPercentage) {
  let total = subtotal + subtotal * tipPercentage;
  return total;
}

function calculateCheck(lunch, tipPercentage) {
  let subtotal = calculateSubtotal(lunch);
  let total = addTip(subtotal, tipPercentage);
  return total;
}

console.log(calculateCheck(lunch, 0.22).toFixed(2));

/*console.log(subtotal);
let total = subtotal + subtotal * 0.18;
console.log(total.toFixed(2));*/
