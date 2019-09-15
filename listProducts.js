// print out ten random product names and prices

// using statement for faker library
var faker = require('faker');
var randomName = faker.name.findName();
var randomProduct = faker.commerce.product();

console.log(randomProduct);