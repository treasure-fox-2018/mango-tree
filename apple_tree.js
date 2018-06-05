"use strict";

const fruitTree = require('./fruit_tree.js')
const FruitTree = fruitTree[0]
const Fruit = fruitTree[1]

class AppleTree extends FruitTree{
  constructor(maxAge, matureAge) {
    super(10, 4)
  }
}

class Apple extends Fruit{
  constructor() {
    super()
  }
}

module.exports = AppleTree