"use strict"
let tree = require('./fruitsTree.js')
let Tree = tree.FruitTree
let Fruit = tree.Fruits

// Release 0
class MangoTree extends Tree{
  
  // Initialize a new MangoTree
  constructor () {
    super();
    this._deathAge = 16
    this._notGrowAge = 5
    this._matureAge = 3
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super()
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
let mango = new Mango()
if (mangoTree.healthStatus === true) {
  console.log('The Mango tree is alive ! :smile:')
}
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} ${mangoTree.harvest()}`)
  if (mangoTree.healthStatus === false) {
    console.log('The Mango tree is die ! :sad:')
  }
} while (mangoTree.healthStatus !== false)