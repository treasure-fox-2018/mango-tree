"use strict"

// Release 0

const fruitTreeObj = require(`./fruit_tree.js`)
let fruitTree = fruitTreeObj.FruitTree
let Fruit = fruitTreeObj.Fruits
class MangoTree {

  // Initialize a new MangoTree
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

    this.maxAge = 20
    this.stopGrowth = 14
    this._age++

    if (this._age <= this.stopGrowth) {

      this._height += Math.random()
      this._height = Number(this._height.toFixed(2))

    }

    if (this._age >= this.maxAge) {

      this._healthStatus = false

    }

  }


  produceMangoes() {

    this.matureAge = 3
    this._fruits = []
    if (this._age >= this.matureAge) {
      this.produce = Math.floor(Math.random() * 10)
      for (let i = 0; i < this.produce; i++) {
        let mango = new Mango()
        if (mango.fruitfull === 1) {
          this._fruits.push(mango)
        } else {
          this._fruits.push(mango)
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

class Mango {
  // Produce a mango

  constructor() {

    this.fruitfull = Math.floor(Math.random() * 2)

  }

}

// console.log("The mango tree is alive! :smile:")
let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)
// console.log('tree dead :c')

// module.exports =MangoTree
