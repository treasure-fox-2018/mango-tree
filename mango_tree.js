"use strict";

const fruitTree = require('./fruit_tree.js')
const FruitTree = fruitTree[0]
const Fruit = fruitTree[1]

class MangoTree extends FruitTree{
  constructor(maxAge, matureAge) {
    super(25, 6)
  }
}

class Mango extends Fruit{
  constructor() {
    super()
  }
}

module.exports = MangoTree