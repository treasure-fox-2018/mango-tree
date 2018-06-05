let tree = require('./fruitsTree.js')
let Tree = tree.FruitTree
let Fruit = tree.Fruits

console.log(Tree)
class AppleTree extends Tree{
  constructor() {
    super();
    this._deathAge = 18
    this._notGrowAge = 8
    this._matureAge = 3
  }
}
class Apple extends Fruit{
  constructor() {
    super()
  }
}

let appleTree = new AppleTree()
let appple = new Apple()
if (appleTree.healthStatus === true) {
  console.log('The Apple tree is alive ! :smile:')
}
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested} ${appleTree.harvest()}`)
  if (appleTree.healthStatus === false) {
    console.log('The Apple tree is die ! :sad:')
  }
} while (appleTree.healthStatus !== false)