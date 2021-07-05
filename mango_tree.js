"use strict"

// release 0
class MangoTree {
  // Initialize a new MangoTree
  constructor(name) {
    this._name = name;
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = 'alive';
    this._harvested = ''
  }
  
  // Get current states here
  get name() {
    return this._name;
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

  // Grow the tree
  grow() {
      let randomNum = Math.random().toFixed(1);
      this._age++;
      if(this._age < 11) {
        this._height += Number(randomNum);
        this._height = Number(this._height.toFixed(1));
      }

      if(this._age >= 20) {
        this._healthyStatus = 'dead';
      }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age > 4) {
      let randomNum = Math.ceil(Math.random() * 15);
      for(let i = 0; i < randomNum; i++) {
        this._fruits.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

// Produce a mango
class Mango {
  constructor() {
    this.quality =  this.fruitQuality();
  }

  fruitQuality() {
    let random = Math.round(Math.random());
    if(random == 0) {
      return 'good';
    } else {
      return 'bad';
    }
  }
}

  // driver code untuk release 0
  let mangoTree = new MangoTree('Mango')
  do {

    if(mangoTree.age == 0) {
      console.log(`The ${mangoTree.name} tree is alive :smile:`)
    }

    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`);
    
    if(mangoTree.age >= 20) {
      console.log(`The ${mangoTree.name} tree is no more :sad:`);
    }

  } while (mangoTree._healthyStatus != 'dead')
  


// Release 1
class AppleTree extends MangoTree {
  constructor(name) {
    super(name);
  }

  grow() {
    let random = Math.random().toFixed(1);
    this._age++;
    if(this._age < 6) {
      this._height += Number(random);
      this._height = Number(this._height.toFixed(1));
    }
    if(this._age >= 15  ) {
      this._healthyStatus = 'dead';
    }
  }

  produceApple() {
    if(this._age >= 7) {
      let random = Math.ceil(Math.random() * 30);
    
      for(let i = 0; i < random; i++) {
        this._fruits.push(new Apple);
      }
    }
  }
}
class Apple extends Mango{
  constructor() {
    super();
  }
}

let appleTree = new AppleTree('Apple');
do {
  if (appleTree.age === 0) {
    console.log(`The ${appleTree.name} tree is alive :smile:`);
  }
  appleTree.grow();
  appleTree.produceApple();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.harvested}`);
  if (appleTree.age >= 15) {
    console.log(`The ${appleTree.name} tree is no more :sad:`);
  }
} while (appleTree._healthyStatus != 'dead');

// Release 2
class FruitTree {
  // in mango_tree_release2.js
}

class Fruit {

}
// console.log(mangoTree) //test check MangoTree