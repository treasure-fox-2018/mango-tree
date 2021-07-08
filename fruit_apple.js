"use strict"
const {FruitTree, Fruit} = require("./fruit_tree.js");

class AppleTree extends FruitTree {
  constructor(matureAge, maxGrow, deadAge) {
    super(matureAge, maxGrow, deadAge);
    super.matureAge = matureAge
    super.maxGrow = maxGrow
    super.deadAge = deadAge
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

module.exports = {
  AppleTree, Apple
}
