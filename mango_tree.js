"use strict"

const fruitManggo = require('./mango.js');

// Release 0

class MangoTree {
    // Initialize a new MangoTree
    constructor () {
        this._age = 0;
        this._maxAge = this.randomize(1, 25);
        this._matureAge = this._maxAge * 0.25;
        this._maxProductiveAge = this._maxAge * 0.90;
        this._height = 0;
        this._healthStatus = true;
        this._fruits = [];
        this._harvested = '';
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
        this._age += 1;
        let randomHeight = Math.random();
        // this._height += randomHeight;

        if (this._age < this._maxProductiveAge) {
            this._height += randomHeight;
            this._height = +this._height.toFixed(1);
        }

        if (this._age === this._maxAge) {
            this._healthStatus = false;
        }
    }

    // Produce some mangoes
    produceMangoes () {
        this._fruits = [];
        let fruitsProduced = 0;

        if (this._age >= this._matureAge) {
            fruitsProduced = this.randomize(1, 50);
            for (let i = 0; i < fruitsProduced; i++) {
                let mango = new fruitManggo.Mango();
                this._fruits.push(mango.quality());
            }
        }
    }

    // Get some fruits
    harvest () {
        // console.log(this._fruits);
        let fruitsHarvested = this._fruits.length;
        let goodFruits = 0;
        let badFruits = 0;

        for (let i = 0; i < fruitsHarvested; i++) {
            if (this._fruits[i] === 'good') {
                goodFruits += 1;
            } else if (this._fruits[i] === 'bad'){
                badFruits += 1
            }
        }

        this._harvested =  `${fruitsHarvested} (${goodFruits} good, ${badFruits} bad)`;
    }

    randomize(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
}

// class Mango {
//   // Produce a mango
//   constructor () {
//       this._quality = this.quality();
//   }
//
//   get quality() {
//       return this._quality;
//   }
//
//   quality() {
//       let fruitCondition = ['good', 'good', 'good', 'bad'];
//       return fruitCondition[Math.floor((Math.random() * 4) + 0)];
//   }
// }

//

// driver code untuk release 0
let mangoTree = new MangoTree()
console.log('                       Your tree is alive! :(\n');
do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log('\n                       Your tree has met it`s end. Sad :)');

//

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}*/

//
