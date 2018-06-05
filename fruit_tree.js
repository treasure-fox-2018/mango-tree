

// Release 2
class FruitTree {

    constructor() {

        this._age = 0
        this._height = 0
        this._fruits = []
        this._healthStatus = true
        this._harvest = 0
    }

    get age() {
        return this._age
    }

    get height() {
        // return this.height
        return this._height
    }

    get fruits() {
        return this._fruits
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return `${this._fruits.length} ${this.harvest()}`
    }

    // Get current states here
    // Grow the tree
    grow() {

        this.maxAge = 10
        this.stopGrowth = 8
        this._age++

        if (this._age <= this.stopGrowth) {
            this._height += Math.random()
            this._height = Number(this._height.toFixed(2))
        }

        if (this._age >= this.maxAge) {
            this._healthStatus = false
        }

    }

    produceFruit() {

        this.matureAge = 2
        this._fruits = []
        if (this._age >= this.matureAge) {
            this.produce = Math.floor(Math.random() * 15) + 2
            for (let i = 0; i < this.produce; i++) {
                let fruit = new Fruit()
                if (fruit.fruitfull === 1) {
                    this._fruits.push(fruit)
                } else {
                    this._fruits.push(fruit)
                }
            }
        }
        return this._fruits
        // console.log(this._fruits)
    }

    // Get some fruits
    harvest() {

        let good = 0
        let bad = 0
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i].fruitfull === 1) {
                good++
            } else {
                bad++
            }
        }
        return `(${good} good, ${bad} bad)`
    }
}







class Fruit {
    constructor() {
        this.fruitfull = Math.floor(Math.random() * 2)
        this.maxAge=30
    }
}

class MangoTree extends FruitTree {
    constructor() {
        super()
    }
}
class AppleTree extends FruitTree {
    constructor() {
        super()
    }
}
class PearTree extends FruitTree {
    constructor() {
        super()
    }

}

// let appleTree = new AppleTree()
// let mangoTree = new MangoTree(5, 20, 4)
// let pearTree = new PearTree(9, 25, 6)
// let fruit = new Fruit()


console.log("The Fruit tree is alive! :smile:")
let fruitTree = new FruitTree()
do {
    fruitTree.grow();
    fruitTree.produceFruit();
    fruitTree.harvest();
    console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus != false)
console.log('tree dead :c')

module.exports ={


    fruitTree:fruitTree,
    Fruit:Fruit
}
