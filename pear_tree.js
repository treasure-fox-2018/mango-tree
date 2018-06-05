const {FruitTree,Fruit} = require("./fruit_tree.js");


class PearTree extends FruitTree {
   constructor() {
     super()
     this.maxAge = 12
     this.maxHeightAge = 1
     this.mature = 2
   }
 }
 class Pear extends Fruit {
   constructor() {
     super()
   }
 } 
 
//  // * driver code untuk Pear
//  let pearTree = new PearTree()
//  let pear = new Pear()
 
//  do {
//    pearTree.grow();
//    pearTree.produceMangoes();
//    pearTree.harvest();
//    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
//   } while (pearTree.healthStatus != false)

 module.export = {PearTree, Pear}