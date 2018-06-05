
const {FruitTree,Fruit} = require("./fruit_tree.js");

class MangoTree extends FruitTree {
  constructor() {
    super()
    this.maxAge = 30
    this.maxHeightAge = 3
    this.mature = 4
  }
}
class Mango extends Fruit {
  constructor() {
    super()
  }
} 


  // * driver code untuk Mango
  // let mangoTree = new MangoTree()
  // let fruit = new Fruit()

  // do {
  //   fruitTree.grow();
  //   fruitTree.produceMangoes();
  //   fruitTree.harvest();
  //   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
  //  } while (fruitTree.healthStatus != false)

module.export = {MangoTree,mango}