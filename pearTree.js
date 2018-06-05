const FruitsTreeParent = require('./fruit_tree')
const Tree = FruitsTreeParent.tree
const Fruit = FruitsTreeParent.fruit

class PearTree extends Tree{
    constructor(matureAge, dead, maxHigh){
        super()
        this.matureAge = matureAge;
        this.dead = dead;
        this.maxHigh = maxHigh
    }
}

class Pear extends Fruit{
    constructor(){
        super()
    }
}

let pear = new PearTree(2, 5, 6)

do{
    pear.grow()
    pear.produceFruit()
    pear.harvest()
    console.log(`[Year ${pear.age} Report] Height = ${pear.height} | Fruits harvested = ${pear.harvested}`)
}while(pear.healthStatus !== false)