//Sandbox File

class FruitTree {
  constructor(matureAge,maxAge) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._health = true;
    this._harvested = 0;
    this._matureAge = Math.round(Math.random() * (10 - 5) + matureAge)
    this._maxAge = Math.round(Math.random() * (20 - 10) + maxAge)
    this._totalFruits = [0,0,0]; //index 0 = total, index 1 = good, index 2 = bad
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
    return this._health;
  }

  get harvested() {
    return this._harvested;
  }

  // Grow the tree
  grow() {
    //this._maxAge = Math.round(Math.random() * (30 - 20) + 20)
    this._age += 1;
    let height = this._height;
    // console.log(this._age);
    if (this._age < this._matureAge) {
      this._height += Math.random() * 1.5;
    }
    if (this._age >= this._maxAge) {
      this._health = false;
    }
  }

  // Produce some apples
  produceFruits() {
    let randomProduced = Math.floor(Math.random() * (10-2) + 10) //maxRange - minRange
    for (let i = 0; i < randomProduced; i ++) {
      this.fruits.push(new Fruit)
    }
    //console.log(this._fruits)
  }

  // Get some fruits
  harvest() {
    let goodFruits = 0;
    let badFruits = 0;
    // console.log(this._fruits[0]._quality)
    for (let i = 0; i < this._fruits.length; i++) {
      // console.log('dfdfdfd')
      if (this._fruits[i]._quality == 'good') {
        goodFruits += 1
        this._totalFruits[0] += 1
        this._totalFruits[1] += 1
      }
      else {
        badFruits += 1
        this._totalFruits[0] += 1
        this._totalFruits[2] += 1
      }
    }
    this._harvested = `${this._totalFruits[0]} (${this._totalFruits[1]} good, ${this._totalFruits[2]} bad)`
    this._fruits = []
    this._totalFruits = [0,0,0]
  }
}

class Fruit {
  constructor() {
    this._quality = this.randomQuality()
  }
  randomQuality() {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'good';
    }
    else {
    return 'bad';
    }
  }
}

//MangoTree
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super(14, 20)
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super ()
  }
}

//Apple Tree
class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor() {
    super(17, 25)
  }
}

class Apple extends Fruit {
  // Produce an apple
  constructor() {
    super ()
  }
}

//Pear Tree
class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor() {
    super(16, 23)
  }
}

class Pear extends Fruit {
  // Produce a pear
  constructor() {
    super ()
  }
}


// Driver Code
let mangoTree = new MangoTree();
let mango = new Mango();
let appleTree = new AppleTree();
let apple = new Apple();
let appleTree = new PearTree();
let apple = new Pear();


//For Mango Tree
console.log('      =================== MANGO ===================   ');
console.log(`The tree is alive! :)`);

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)}m | Fruits harvested = ${mangoTree.harvested}`);
  // to fixed is for rounding to 1 decimal point
} while (mangoTree._health != false)

console.log (`The tree has met its end. :(`);
console.log('\n\n');


//For Apple Tree
console.log('      =================== APPLE ===================   ');
console.log(`The tree is alive! :)`);

do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)}m | Fruits harvested = ${appleTree.harvested}`);
  // to fixed is for rounding to 1 decimal point
} while (appleTree._health != false)

console.log (`The tree has met its end. :(`);
console.log('\n\n');


//For Pear Tree
console.log('      =================== PEAR ===================   ');
console.log(`The tree is alive! :)`);

do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)}m | Fruits harvested = ${pearTree.harvested}`);
  // to fixed is for rounding to 1 decimal point
} while (pearTree._health != false)

console.log (`The tree has met its end. :(`);
console.log('\n\n');


// module.exports = {FruitTree, Fruit}
