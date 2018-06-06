class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = true;
    this._matureAge = 2; // starts producing
    this._die = 20; //cant produce anymore
    this._harvested = {total: 0, good: 0, bad: 0};
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
    let harvested = this._harvested
    return `${harvested.total} (${harvested.good} good, ${harvested.bad} bad)`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._fruits = []
    this._harvested = {total: 0, good: 0, bad: 0};

    let randomHeight = Number((Math.random()).toFixed(1));
    let stopGrowing = 10;

    if (this._height <= stopGrowing){
      this._height = Number((this._height + randomHeight).toFixed(1));
    }

    this._age += 1;
    if (this._age === this._die){
      this._healthStatus = false;
    }
    return this;
  }

  // Produce some mangoes
  produceFruits (fruitName) {
    let quantityRandom = Math.ceil(Math.random() * 10);
    if (this._age >= this._matureAge){
      for (let i = 0; i < quantityRandom; i++){
        if (fruitName === 'mango'){
          let mango = new Mango ()
          this._fruits.push(mango)
        } else if (fruitName === 'apple') {
          let apple = new Apple ()
          this._fruits.push(apple)
        } else if (fruitName === 'pear') {
          let pear = new Pear ()
          this._fruits.push(pear)
        }

      }
    }
    return this;
  }

  // Get some fruits
  harvest () {
    var fruits = this._fruits;
    var harvested = this._harvested
    harvested.total = fruits.length

    for (let i in fruits){
      if (fruits[i]._quality === 'good'){
        harvested.good += 1
      }
      else {
        harvested.bad += 1
      }
    }

    return this;
  }

}

class Fruits {
  // Produce a mango
  constructor () {
    this._quality = this.fruitQuality()
  }

  fruitQuality(){
    let quality = ['good', 'bad']
    let indexRandom = Math.floor(Math.random() * quality.length)
    let qualityRandom = quality[indexRandom]
    return qualityRandom
  }
}


//
//
//
// Release 0

class AppleTree extends FruitTree {
  constructor () {
    super()
    this._matureAge = 1; // starts producing
    this._die = 11; //cant produce anymore
  }
}

class Apple extends Fruits {
  constructor () {
    super()
  }
}

class MangoTree extends FruitTree {
  constructor () {
    super()
    this._matureAge = 5; // starts producing
    this._die = 15; //cant produce anymore
  }
}

class Mango extends Fruits {
  constructor () {
    super()
  }
}

class PearTree extends FruitTree {
  constructor () {
    super()
    this._matureAge = 10; // starts producing
    this._die = 20; //cant produce anymore
  }
}

class Pear extends Fruits {
  constructor () {
    super()
  }
}

let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruits('pear');
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('The tree has met its end. :sad:')
