let tree = require('./fruitsTree.js')
let Tree = tree.FruitTree
let Fruit = tree.Fruits


class PearTree extends Tree{
  constructor() {
    super();
    this._deathAge = 9
    this._notGrowAge = 4
    this._matureAge = 2
  }
}
class Pear extends Fruit{
  constructor() {
    super()
  }
}

let pearTree = new PearTree()
let appple = new Pear()
if (pearTree.healthStatus === true) {
  console.log('The Pear tree is alive ! :smile:')
}
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested} ${pearTree.harvest()}`)
  if (pearTree.healthStatus === false) {
    console.log('The Pear tree is die ! :sad:')
  }
} while (pearTree.healthStatus !== false)