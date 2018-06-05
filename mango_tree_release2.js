'use strict'

class FruitTree {
    constructor(object) {
        this.name = object.name
        this._stopGrow = object.stopGrow
        this._start = object.start
        this._deadAge = object.deadAge
        this._fruitMax = object.fruitMax
        this._age = 0
        this._height = 0
        this._fruits = []
        this._healthStatus = true
        this._harvested = ''
        this._totalFruits = {total: 0, good: 0, bad: 0}
    }

    //GET
    get age() {
        return this._age
    }

    get height() {
        return this._height
    }

    get fruits() {
        return this._fruits
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return this._harvested
    }

    get totalFruits() {
        return this._totalFruits
    }

    //-----METHOD-----

    grow() {
        let randomNum = Math.random().toFixed(1);
        this._age++;
        if(this._age >= this._start && this._age <= this._stopGrow) {
          this._height += Number(randomNum);
          this._height = Number(this._height.toFixed(1));
        }
  
        if(this._age >= this._deadAge) {
          this._healthyStatus = 'dead';
        }
    }
  
    produce() {
      if(this._age >= this._start) {
        let randomNum = Math.ceil(Math.random() * this._fruitMax);
        for(let i = 0; i < randomNum; i++) {
          this._fruits.push(new Fruit())
        }
      }
    }
  
    harvest() {
      let good = 0;
      let bad = 0;
      for(let i = 0; i < this._fruits.length; i++) {
        if(this._fruits[i].fruitQuality == 'good') {
            good++
            this._totalFruits.good++
            this._totalFruits.total++
        } else {
            bad++
            this._totalFruits.bad++
            this._totalFruits.total++
        }
      }
      this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
      this._fruits = []
    }

    report() {
        do {

            if(this._age == 0) {
              console.log(`The ${this.name} tree is alive :smile:`)
            }
        
            this.grow();
            this.produce();
            this.harvest();

            console.log(`[Year ${this.age} Report] Height = ${this.height} | Fruits harvested = ${this.harvested}`);
            
            if(this._age >= this._deadAge) {
              console.log(`The ${this.name} tree is no more :sad:`)
              console.log(`--------------------------------------`)
              console.log(`Total harvested fruits: ${this.totalFruits.total}, good: ${this.totalFruits.good}, bad: ${this.totalFruits.bad}`)
            }
        
          } while (this._healthyStatus != 'dead')
    }
}

class MangoTree extends FruitTree {
    constructor(object) {
        super(object)
        
    }
}

class AppleTree extends FruitTree {
    constructor(object) {
        super(object)

    }
}

class PearTree extends FruitTree {
    constructor(object) {
        super(object)

    }
}

// class producing fruit
class Fruit {
    constructor() {
        this.fruitQuality = this.quality();
    }

    quality() {
        let random = Math.round(Math.random())
        if(random == 0) {
            return 'good'
        } else {
            return 'bad'
        }
    }
}

class Mango extends Fruit {
    constructor() {
        super()
    }
}

class Apple extends Fruit {
    constructor() {
        super()
    }
}

class Pear extends Fruit {
    constructor() {
        super()
    }
}

var mango = {
    name: 'mango',
    stopGrow: 10,
    start: 2,
    deadAge: 15,
    fruitMax: 20,
}

var apple = {
    name: 'apple',
    stopGrow: 15,
    start: 3,
    deadAge: 20,
    fruitMax: 30,
}

var pear = {
    name: 'pear',
    stopGrow: 20,
    start: 1,
    deadAge: 25,
    fruitMax: 50,
}

var mangoTree = new MangoTree(mango)
var appleTree = new AppleTree(apple)
var pearTree = new PearTree(pear)

mangoTree.report();
appleTree.report();
pearTree.report();

// test print each class
// console.log(mangoTree)
// console.log(appleTree)
// console.log(pearTree)