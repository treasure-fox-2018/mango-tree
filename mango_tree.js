"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age, height, fruitsAmount, pickedFruitsAmount, healthStatus) {
    this._age = age;
    this._height = height;
    this._fruitsAmount = fruitsAmount;
    this._pickedFruitsAmount = pickedFruitsAmount;
    this._healthStatus = healthStatus;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitsAmount;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._pickedFruitsAmount;
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age = this._age + 1;
    this._height = this._height + (Math.trunc(Math.random() * 5));

    var matureAge = 5;
    var stopHeightAge = 10;
    var stopFruitAge = 15;
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
    var arrStr = ["good", "bad"];
    this._quality = arrStr[Math.trunc(Math.random() * arrStr.length)];
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
