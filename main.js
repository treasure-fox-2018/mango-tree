"use strict"

const fruitMango = require('./mango.js');
const fruitApple = require('./apple.js');

let appleTree = new fruitApple();
let mangoTree = new fruitMango();

let fruit = [appleTree, mangoTree]

for (let i = 0; i < fruit.length; i++) {
    console.log(`                       Your ${fruit[i].name} tree is alive! :(\n`);
    do {
        fruit[i].grow();
        fruit[i].produceFruit();
        fruit[i].harvest();
        console.log(`[Year ${fruit[i].age} Report] Height = ${fruit[i].height} | Fruits harvested = ${fruit[i].harvested}`)
    } while (fruit[i].healthStatus != false)

    console.log(`\n                       Your ${fruit[i].name} has met it's end. Sad :)`);
}
