"use strict"
const {FruitTree, Fruit} = require("./fruit_tree.js");

class PeerTree extends FruitTree {
  constructor(matureAge, maxGrow, deadAge) {
    super(matureAge, maxGrow, deadAge);
    super.matureAge = matureAge
    super.maxGrow = maxGrow
    super.deadAge = deadAge
  }
}

class Peer extends Fruit {
  constructor() {
    super()
  }
}

module.exports = {
  PeerTree, Peer
}
