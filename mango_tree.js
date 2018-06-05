'use strict'

// Release 0
class MangoTree {
  constructor(name) {
    this.name = name;
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._harvested = '';
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

  get healtyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let random = Math.random().toFixed(1);
    this._age += 1;
    if (this._age < 11) { // stop growing age 10
      this._height += Number(random);
      this._height = Number(this._height.toFixed(1));
    }
    if (this._age === 20) { // age 20 died
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age > 4) { // start producing fruits at age 5
      let random = Math.ceil(Math.random() * 15); // can produce up to 15 fruits.
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Mango());
      }
    }
  }

  // Get some fruits
  harvest() {
    let goodFruits = 0;
    let badFruits = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        goodFruits++;
      } else {
        badFruits++;
      }
    }
    this._harvested = `${this.fruits.length} (${goodFruits} good and ${badFruits} bad)`;
    this._fruits = [];
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.randomQuality();
  }

  randomQuality () {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'good';
    } else {
      return 'bad';
    }
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree('mango');
do {
  if (mangoTree.age === 0) {
    console.log(`The ${mangoTree.name} tree is alive :smile:`);
  }
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.harvested}`);
  if (mangoTree.age === 20) {
    console.log(`The ${mangoTree.name} ntree is no more :sad:`);
  }
} while (mangoTree._healthyStatus != false);


// Release 1
class AppleTree extends MangoTree {
  constructor(name) {
    super(name);
  }
  grow() {
    let random = Math.random().toFixed(1);
    this._age += 1;
    if (this._age < 6) { // stop growing age 5
      this._height += Number(random);
      this._height = Number(this._height.toFixed(1));
    }
    if (this._age === 15) { // age 15 died
      this._healthyStatus = false;
    }
  }

  // Produce some apples
  produceApples() {
    if (this._age > 8) { // start producing fruits at age 7
      let random = Math.ceil(Math.random() * 30); // can produce up to 30 fruits
      for (let i = 0; i < random; i++) {
        this._fruits.push(new Mango());
      }
    }
  }
}
class Apple extends Mango {
  constructor() {
    super()
  }
}

// driver code for release 1
let appleTree = new AppleTree('Apple');
do {
  if (appleTree.age === 0) {
    console.log(`The ${appleTree.name} tree is alive :smile:`);
  }
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.harvested}`);
  if (appleTree.age === 15) {
    console.log(`The ${appleTree.name} tree is no more :sad:`);
  }
} while (appleTree._healthyStatus != false);
