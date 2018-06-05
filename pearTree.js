"use strict"

const Impor = require('./fruitTree.js');
const Tree = Impor.pohon;
const Fruits = Impor.buah


// Release 0

class PearTree extends Tree {
  constructor () {
    super()
    this._matureAge = 10; // starts producing
    this._die = 20; //cant produce anymore
  }
}

class Pear extends Tree {
  constructor () {
    super()
  }
}



// driver code untuk release 0
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('The tree has met its end. :sad:')