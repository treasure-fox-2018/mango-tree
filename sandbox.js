"use strict";

// Release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor(maxAge, matureAge) {
    this._maxAge = maxAge;
    this._matureAge = matureAge;
    this._totalFruit = 0;
    this._healtStatus = true;
    this._qualityFruit = [];
    this._age = 0;
    this._fruits = [];
    this._height = 0;
    this._harvest = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healtStatus;
  }

  get harvested() {
    return this._harvest;
  }

  grow() {
    this._age += 1;
    let height = this._height;

    if (this._height < 3) {
      this._height += Math.random() * 0.5 + 0.5;
    }

    if (this._age === this._maxAge) {
      this._healtStatus = false;
    }
  }

  produceMangoes() {
    this._qualityFruit = [];
    let random = Math.floor(Math.random() * 10 + 5);

    if (this._age >= this._matureAge) {
      for (let i = 0; i < random; i++) {
        var newMango = new Mango();
        this._qualityFruit.push(newMango.quality());
      }
    }
    
  }

  // Get some fruits
  harvest() {
    let goodFruit = 0
    let badFruit = 0
    let qualityFruits = this._qualityFruit
    let totalFruits = qualityFruits.length

    for (let i = 0; i < qualityFruits.length; i++) {
      if (qualityFruits[i] === 'Good') {
        goodFruit++
      } else if (qualityFruits[i] === 'Bad') {
        badFruit++
      }
    }
    this._harvest = `${totalFruits} (${goodFruit} Good, ${badFruit} Bad)`
  }
}

class Mango {
  // Produce a mango
  constructor() {}

  quality() {
    let qualitys = ["Good", "Bad"];
    let angkaRandom = Math.floor(Math.random() * 2);
    return qualitys[angkaRandom];
  }
}

const mangoTree = new MangoTree(10, 3);


// const mango = new Mango();
// console.log(mango.quality());

console.log("               ==========> MANGO <==========             ");
console.log("The tree is alive! :D");
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(
    `[Year ${mangoTree.age} repot] Height = ${mangoTree.height.toFixed(
      1
    )} m | Fruits harvested = ${mangoTree.harvested}`
  );
} while (mangoTree.healthStatus != false);
console.log("The tree has met its end :(");

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
