"use strict";

const fruitTree = require('./fruit_tree.js')
const FruitTree = fruitTree[0]
const Fruit = fruitTree[1]

class PearTree extends FruitTree{
  constructor(maxAge, matureAge) {
    super(20, 5)
  }
}

class Pear extends Fruit{
  constructor() {
    super()
  }

}

module.exports = PearTree