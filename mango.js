"use strict"


// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = true;
    this._harvested = '';
    this._maxAge = 30;
    this._matureage = this._maxAge * 0.15;
    this._maxfruit = 30;
    this._maxHeight = 40; 
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height + 'm';

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
    this._fruits = [];
    this._age += 1;
  

    var randomize = Math.random();
    // console.log(randomize);
    if (this._age < this._maxAge) {
      this._height += randomize;
      this._height = +this._height.toFixed(1);
    }
    
    if (this._age === this._maxAge) {
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  // fruit is produced when tree reaches mature age
  produceMangoes () {
    if (this._age >= this._matureage && this._age <= this._maxAge) {
      var fruitQty = Math.floor(Math.random() * this._maxfruit); //fruits can't have decimal
      for (let i = 0; i < fruitQty; i++) {
        let mango = new Mango();
        this._fruits.push(mango.quality());
      }
    }

  }

  // Get some fruits
  harvest () {
    this.badfruit = 0;
    this.goodfruit = 0;
    // console.log('this fruit', this._fruits);
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i] === 'bad') {
        this.badfruit += 1;
      } else {
        this.goodfruit += 1;
      }
    }
    this._harvested = `${this._fruits.length} (${this.goodfruit} good, ${this.badfruit} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this._stats = this.quality();
  }


  quality() {
    var random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return 'bad';
    } else {
      return 'good';
    }
  }

}


  // * driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus !== false)


// // Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}
