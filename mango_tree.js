"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healthStatus = true;
    this._harvested = 0
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;

  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
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
  constructor (stats) {
    this._stats = this.quality;
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
