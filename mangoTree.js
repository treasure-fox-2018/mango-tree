'use strict'

// Release 2
class FruitTree {
  constructor(object) {
    this.name = object.typeOfFruit;
    this._stopGrowing = object.stopGrowing;
    this._startProducing = object.startProducing;
    this._dyingAge = object.dyingAge;
    this._fruitLimit = object.fruitLimit;
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._harvested = '';
    this._totalFruits = [0,0,0]; // index 0 = total, index 1 = good, index 2 = bad
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

  get totalFruits() {
    return this._totalFruits;
  }

  grow() {
    let random = Math.random().toFixed(1);
    this._age += 1;
    if (this._age < this._stopGrowing) { // stop growing age
      this._height += Number(random);
      this._height = Number(this._height.toFixed(1));
    }
    if (this._age === this._dyingAge) { // dying age
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits() {
    if (this._age > this._startProducing) { // start producing fruits age
      let random = Math.ceil(Math.random() * this._fruitLimit); // can produce up to how many fruits
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
        this._totalFruits[0]++;
        this._totalFruits[1]++;
      } else {
        badFruits++;
        this._totalFruits[0]++;
        this._totalFruits[2]++;
      }
    }
    this._harvested = `${this.fruits.length} (${goodFruits} good and ${badFruits} bad)`;
    this._fruits = [];
  }

  report() {
    do {
      if (this.age === 0) {
        console.log(`The ${this.name} tree is alive :smile:`);
      }
      this.grow();
      this.produceFruits();
      this.harvest();
      console.log(`[Year ${this.age} Report] Height = ${this.height}m | ${this.name} fruits harvested = ${this.harvested}`);
      if (this._healthyStatus === false) {
        console.log(`The ${this.name} tree is no more :sad:`);
        console.log(`Total harvested = ${this.totalFruits[0]} (good = ${this.totalFruits[1]}, bad = ${this.totalFruits[2]})`);
        console.log('--------------------------------------------------------------------------------')
      }
    } while (this._healthyStatus != false);
  }
}
class Fruit {
  // Produce a fruit
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

let apple = {
  typeOfFruit: 'Apple',
  stopGrowing: 5,
  startProducing: 8,
  dyingAge: 15,
  fruitLimit: 30,
};

let mango = {
  typeOfFruit: 'Mango',
  stopGrowing: 10,
  startProducing: 5,
  dyingAge: 20,
  fruitLimit: 15,
};

let pear = {
  typeOfFruit: 'Pear',
  stopGrowing: 8,
  startProducing: 10,
  dyingAge: 18,
  fruitLimit: 40,
};

class MangoTree extends FruitTree {
  constructor(object) {
    super(object);
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

class AppleTree extends FruitTree {
  constructor(object) {
    super(object);
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

class PearTree extends FruitTree {
  constructor(object) {
    super(object);
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

// driver code
let mangoTree = new MangoTree(mango);
let appleTree = new AppleTree(apple);
let pearTree = new PearTree(pear);

mangoTree.report();
appleTree.report();
pearTree.report();
