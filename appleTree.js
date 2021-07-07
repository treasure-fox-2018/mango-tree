"use strict"

const Impor = require('./fruitTree.js');
const Tree = Impor.pohon;
const Fruits = Impor.buah


// Release 0

class AppleTree extends Tree {
  constructor () {
    super()
    this._matureAge = 1; // starts producing
    this._die = 11; //cant produce anymore
  }
}

class Apple extends Fruits {
  constructor () {
    super()
  }
}



// driver code untuk release 0
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits('apple');
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('The tree has met its end. :sad:')
