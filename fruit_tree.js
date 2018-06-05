"use strict"

class Fruit {
  constructor () {
      this._quality = this.quality();
  }

  get quality() {
      return this._quality;
  }

  quality() {
      let fruitCondition = ['good', 'good', 'good', 'bad'];
      return fruitCondition[Math.floor((Math.random() * 4) + 0)];
  }
}

class FruitTree {
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

    // Grow the tree
    grow () {
        this._age += 1;
        let randomHeight = Math.random();
        let isMature = this._age < this._maxProductiveAge

        if (isMature) {
            this._height += randomHeight;
            this._height = +this._height.toFixed(1);
        }

        let isHealthy = this._age < this._maxAge
        this._healthStatus = isHealthy;

    }

    // Produce some fruit
    produceFruit () {
        this._fruits = [];

        if (this._age >= this._matureAge) {
            let fruitsProduced = this.randomize(1, 50);
            for (let i = 0; i < fruitsProduced; i++) {
                let mango = new Fruit();
                this._fruits.push(mango);
            }
        }
    }

    // Get some fruits
    harvest () {
        let fruitsHarvested = this._fruits.length;
        let goodFruits = 0;
        let badFruits = 0;

        for (let i = 0; i < fruitsHarvested; i++) {
            if (this._fruits[i]._quality === 'good') {
                goodFruits += 1;
            } else if (this._fruits[i]._quality === 'bad'){
                badFruits += 1
            }
        }

        this._harvested =  `${fruitsHarvested} (${goodFruits} good, ${badFruits} bad)`;
    }

    randomize(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
}

module.exports = {Fruit, FruitTree}
