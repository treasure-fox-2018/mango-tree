const FruitsTreeParent = require("./fruit_tree.js")
const Tree = FruitsTreeParent.tree
const Fruit = FruitsTreeParent.fruit

"use strict"

// Release 0

class AppleTree extends Tree{
    constructor(matureAge, dead, maxHigh){
        super()
        this.matureAge = matureAge;
        this.dead = dead;
        this.maxHigh = maxHigh
    }
}

class Apple extends Fruit{
    constructor(){
        super()
        
    }
}

let appleTree = new AppleTree(2, 5, 5)
do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)







