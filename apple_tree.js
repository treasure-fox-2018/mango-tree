const FruitTree = require("./fruit_tree.js");


class AppleTree extends FruitTree {
  constructor() {
    super() 
    this.maxAge = 20
    this.maxHeightAge = 10
    this.mature = 6
  }
}
class Apple extends Fruit {
  constructor() {
    super()
  }
}

// * driver code untuk apel
// let appleTree = new AppleTree()
// let apple = new Apple()

// do {
//   appleTree.grow();
//   appleTree.produceMangoes();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//  } while (appleTree.healthStatus != false)

module.export = AppleTree
 