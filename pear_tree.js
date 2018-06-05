"use strict"

// Release 0
const fruitTreeArr = require(`./fruit_tree.js`)
let Tree = tree.FruitTree
let Fruit = tree.Fruits


class PearTree {

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

        this.maxAge = 40
        this.stopGrowth = 20
        this._age++

        if (this._age <= this.stopGrowth) {
            this._height += Math.random()
            this._height = Number(this._height.toFixed(2))
        }

        if (this._age >= this.maxAge) {
            this._healthStatus = false
        }

    }

    producePears() {

        this.matureAge = 4
        this._fruits = []
        if (this._age >= this.matureAge) {
            this.produce = Math.floor(Math.random() * 15) + 2
            for (let i = 0; i < this.produce; i++) {
                let pear = new Pear()
                if (pear.fruitfull === 1) {
                    this._fruits.push(pear)
                } else {
                    this._fruits.push(pear)
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

class Pear {
    constructor() {
        this.fruitfull = Math.floor(Math.random() * 2)
    }

}

// console.log("The pear tree is alive! :smile:")
let pearTree = new PearTree()
// do {
//     pearTree.grow();
//     pearTree.producePears();
//     pearTree.harvest();
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthStatus != false)
// console.log('tree dead :c')

module.exports = PearTree


