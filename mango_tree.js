"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, pickedFruits, healthStatus) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._pickedFruits = pickedFruits;
    this._healthStatus = healthStatus;
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
    var goodBad = ['good','bad'];
    this._quality = goodBad[Math.floor(Math.random()*goodBad.length)];
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
