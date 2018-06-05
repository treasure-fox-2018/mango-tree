"use strict"

// Release 0
class FruitTree {
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._harvested = null;
    this._healthStatus = 'healthy';
    this._totalFruitsProduced = 0;
    this._totalGoodFruitsProduced = 0;
    this._totalBadFruitsProduced = 0;
    this._fruitQuality = null;
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

  get totalFruitsProduced () {
    return this._totalFruitsProduced;
  }

  get totalGoodFruitsProduced () {
    return this._totalGoodFruitsProduced;
  }

  get totalBadFruitsProduced () {
    return this._totalBadFruitsProduced;
  }

  // Grow the tree
  grow () {
    let dyingAge = 20;
    let maxHeight = 5.2;
    let heightGrowthParameter = (Math.random()*0.9) + 0.1;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age > dyingAge) {
      this._healthStatus = 'dead';
    }
  }

  // Produce some fruits
  produceFruits () {
    let matureAge = 5;
    if (this._age < matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }

  // Get some fruits
  harvest () {
    let fruits = this._fruits;
    let goodFruits = 0;
    let badFruits = 0;

    while (fruits > 0) {
      this._fruitQuality = new Fruit().quality();
      if (this._fruitQuality == 'good') {
        this._totalGoodFruitsProduced += 1;
        goodFruits += 1;
        fruits -= 1;
      }else if (this._fruitQuality == 'bad') {
        this._totalBadFruitsProduced += 1;
        badFruits += 1;
        fruits -= 1;
      }
    }
    this._harvested = `${this._fruits} (${goodFruits} good, ${badFruits} bad)`;
  }
}
class Fruit {
  constructor () {
    this._quality = null;
  }
  quality () {
    var goodBadArr = ['good','bad'];
    var goodBad = goodBadArr[Math.floor(Math.random()*goodBadArr.length)];
    return this._quality = goodBad;
  }
}

class MangoTree extends FruitTree{
  constructor () {
    super()
  }
  // Grow the tree
  grow () {
    let dyingAge = 15;
    let maxHeight = 7;
    let heightGrowthParameter = (Math.random()*0.9) + 0.1;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age > dyingAge) {
      this._healthStatus = 'dead';
    }
  }

  // Produce some fruits
  produceFruits () {
    let matureAge = 3;
    if (this._age < matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

class AppleTree extends FruitTree{
  constructor() {
    super()
  }
  // Grow the tree
  grow () {
    let dyingAge = 30;
    let maxHeight = 9;
    let heightGrowthParameter = (Math.random()*1.4) + 0.7;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age > dyingAge) {
      this._healthStatus = 'dead';
    }
  }

  // Produce some fruits
  produceFruits () {
    let matureAge = 8;
    if (this._age < matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }
}
class Apple extends Fruit{
  constructor() {
    super()
  }
}

class PearTree extends FruitTree{
  constructor() {
    super()
  }
  // Grow the tree
  grow () {
    let dyingAge = 60;
    let maxHeight = 60;
    let heightGrowthParameter = (Math.random()*2) + 1;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age > dyingAge) {
      this._healthStatus = 'dead';
    }
  }

  // Produce some fruits
  produceFruits () {
    let matureAge = 10;
    if (this._age < matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }
}
class Pear extends Fruit{
  constructor() {
    super()
  }
}


let mangoTree = new MangoTree()
let appleTree = new AppleTree()
let pearTree = new PearTree()

console.log(`The mango tree is alive!`);


do{
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Mangoes harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus == 'healthy');

console.log(`The mango tree has demised`);
console.log(`Total mangoes produced in it's lifetime = ${mangoTree.totalFruitsProduced}\nTotal good mangoes produced = ${mangoTree.totalGoodFruitsProduced}\nTotal bad mangoes produced = ${mangoTree.totalBadFruitsProduced}`);

console.log('');
console.log('');
console.log('');

console.log(`The apple tree is alive!`);


do{
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Apples harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus == 'healthy');

console.log(`The apple tree has demised`);
console.log(`Total apples produced in it's lifetime = ${appleTree.totalFruitsProduced}\nTotal good apples produced = ${appleTree.totalGoodFruitsProduced}\nTotal bad apples produced = ${appleTree.totalBadFruitsProduced}`);

console.log('');
console.log('');
console.log('');

console.log(`The pear tree is alive!`);


do{
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} | Pears harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus == 'healthy');

console.log(`The pear tree has demised`);
console.log(`Total pears produced in it's lifetime = ${pearTree.totalFruitsProduced}\nTotal good pears produced = ${pearTree.totalGoodFruitsProduced}\nTotal bad pears produced = ${mangoTree.totalBadFruitsProduced}`);
