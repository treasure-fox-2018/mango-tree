"use strict"
const {FruitTree, Fruit} = require("./fruit_tree.js");

class MangoTree extends FruitTree {
  constructor(matureAge, maxGrow, deadAge) {
    super(matureAge, maxGrow, deadAge);
    super.matureAge = matureAge
    super.maxGrow = maxGrow
    super.deadAge = deadAge
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

module.exports = {
  MangoTree, Mango
}
