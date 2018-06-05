"use strict"

const fruitMango = require('./mango.js');
const fruitApple = require('./apple.js');

let appleTree = new fruitMango();

// ---------- > Apple


console.log('                       Your APPLE tree is alive! :(\n');
do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

console.log('\n                       Your tree has met it`s end. Sad :)');

console.log('\n');
// -------- > Mango

let mangoTree = new fruitApple();

console.log('                       Your MANGO tree is alive! :(\n');
do {
    mangoTree.grow();
    mangoTree.produceFruit();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log('\n                       Your tree has met it`s end. Sad :)');
