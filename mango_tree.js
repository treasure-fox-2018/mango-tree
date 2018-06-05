"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this.age = age
    this.height = height
    this.fruits = fruits
    this.harvested = harvested
    this.healthStatus = healthStatus
  }

  get age () {
  }

  get height () {

  }

  get fruits () {
  }

  get healthStatus () {
  }

  get harvested () {

  }

  // Get current states here

  // Grow the tree
  grow () {
    var age = 12;

  }

  // Produce some mangoes
  produceMangoes () {
  }

  // Get some fruits
  harvest () {
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.randomMango()
  }

  randomMango() {
    let qual = ['bad', 'good']
    var randomIdx = Math.floor(Math.random() * 2)
    console.log(randomIdx)
    return qual[randomIdx]
  }

  
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
var mangoTree = new MangoTree()
var mango = new Mango()
console.log(mango);


