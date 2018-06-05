"use strict"

const Impor = require('./fruitTree.js');
const Tree = Impor.pohon;
const Fruits = Impor.buah


// Release 0

class MangoTree extends Tree {
  constructor () {
    super()
    this._matureAge = 5; // starts producing
    this._die = 15; //cant produce anymore
  }
}

class Mango extends Tree {
  constructor () {
    super()
  }
}



// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end. :sad:')
