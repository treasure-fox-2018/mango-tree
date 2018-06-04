"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age=0, height= 0, fruits=[], healthStatus='good', harvested=0) {
    this._age = age,
    this._height = height,
    this._fruits = fruits,
    this._healthStatus = healthStatus,
    this._harvested = harvested
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++;

    if (this._age < 20) {
      this._height += (Math.round(Math.floor()*100) / 100) + ' m' ;
      return this._healthy = true;
    } else {
      return this._healthy = false;
    }
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
    this.quality= 
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
