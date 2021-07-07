"use strict";

const Apple = require("./apple_tree.js");
const Pear = require("./pear_tree.js");
const Mango = require("./mango_tree.js");

const AppleTree = new Apple()
const PearTree = new Pear()
const MangoTree = new Mango()

const fruits = [AppleTree, PearTree, MangoTree];
const nameFruits = ['APPLE', 'PEAR', 'MANGO']
console.log(fruits.length)

for (let i = 0; i < fruits.length; i++) {
  console.log(`               ==========> ${nameFruits[i]}  <==========             `);
  console.log("The tree is alive! :D");
  do {
    fruits[i].grow()
    fruits[i].produce()
    fruits[i].harvest()
    console.log(
      `[Year ${fruits[i].age} repot] Height = ${fruits[i].height.toFixed(1)} m | Fruits harvested = ${fruits[i].harvested}`
    );
  } while (fruits[i].healthStatus != false);
  console.log("The tree has met its end :(");
}
