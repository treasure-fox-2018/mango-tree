const FruitsTreeParent = require("./fruit_tree.js")
const Tree = FruitsTreeParent.tree
const Fruit = FruitsTreeParent.fruit

"use strict"

// Release 0

class ManggoTree extends Tree{
    constructor(matureAge, dead, maxHigh){
        super()
        this.matureAge = matureAge;
        this.dead = dead;
        this.maxHigh = maxHigh
    }
}

class Manggo extends Fruit{
    constructor(){
        super()
        
    }
}

let manggotree = new ManggoTree(2, 5, 5)
do {
    manggotree.grow();
    manggotree.produceFruit();
    manggotree.harvest();
   console.log(`[Year ${manggotree.age} Report] Height = ${manggotree.height} | Fruits harvested = ${manggotree.harvested}`)
 } while (manggotree.healthStatus != false)







