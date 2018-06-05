"use strict"


// Release 1
class FruitTree {
    constructor () {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._healthStatus = true;
        this._harvested = '';
        this._maxAge = 50;
        this._matureage = 5;
        this._maxfruit = 60;
        this._maxHeight = 10; 
      }
    
      get age () {
        return this._age;
      }
    
      get height () {
        return this._height + ' m';
    
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

      get maxAge () {
          return this._maxAge;
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
      produceFruit () {
        if (this._age >= this._matureage && this._age <= this._maxAge) {
          var fruitQty = Math.floor(Math.random() * this._maxfruit); //fruits can't have decimal
          for (let i = 0; i < fruitQty; i++) {
            let fruit = new Fruit();
            this._fruits.push(fruit.quality());
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
class Fruit {
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

let fruitTree = new FruitTree()
 do {
   fruitTree.grow();
   fruitTree.produceFruit();
   fruitTree.harvest();
   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
 } while (fruitTree.healthStatus !== false)


 module.exports = {Fruit, FruitTree}