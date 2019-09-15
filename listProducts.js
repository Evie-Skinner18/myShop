// print out ten random product names and prices

// using statement for faker library
var faker = require('faker');

// if you want a different random output each time, don't store the faker API calls in vars
console.log(`Hello there ${faker.name.findName()}. Welcome to Evie\'s Shop!`);

for(let i = 0; i < 10; i++){
    console.log(`This ${faker.commerce.productAdjective()} ${faker.commerce.product()} is a bargain at only £${faker.commerce.price()}!`);
}