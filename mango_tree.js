"use strict"
// Release 2
class FruitTree {
  constructor (healthStatus) {
    this._healthStatus = healthStatus;
    this._age = 0;
    this._height = 0;
    this._fruitsAmount = 0;
    this._harvested = 0;
    this._arrOfObj = [];
    this._good = 0;
    this._bad = 0;
    this._name = "";
  }

  get name() {
    return this._name;
  }

  get good () {
    return this._good;
  }

  get bad () {
    return this._bad;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitsAmount;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get arrOfObj () {
    return this._arrOfObj;
  }

  // Get some fruits
  harvest () {
    this._good = 0;
    this._bad = 0;
    this._harvested = 0;

    let arrOfObjFruitsProduced = this._arrOfObj;
    for (let i = 0; i < arrOfObjFruitsProduced.length; i++) {
      if (arrOfObjFruitsProduced[i].quality === "good") {
        this._good ++;
      } else {
        this._bad ++;
      }
      this._harvested ++;
    }

    this._arrOfObj = [];

    return this._harvested;
  }


}

class Fruit {

  constructor () {
    var arrStr = ["good", "bad"];
    this._quality = arrStr[Math.trunc(Math.random() * arrStr.length)];
  }

  get quality () {
    return this._quality;
  }

}

// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (healthStatus) {
    super ();
    this._name = "Mango";
  }

  // Grow the tree
  grow () {
    var matureAge = 3;
    var stopHeightAge = 10;
    var stopFruitAge = 15;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produce ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 5));
      }
    }

  }

  // Produce some mangoes
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 10));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Mango();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }



}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super();
  }

}


// Release 1
class AppleTree extends FruitTree{
  constructor (healthStatus) {
    super();
    this._name = "Apple"
  }

  // Grow the tree
  grow () {
    var matureAge = 3;
    var stopHeightAge = 9;
    var stopFruitAge = 20;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produce ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 6));
      }
    }

  }

  // Produce some Apples
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 6));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Apple();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}


// Release 3
class PearTree extends FruitTree{
  constructor (healthStatus) {
    super();
    this._name = "Pear";
  }

  // Grow the tree
  grow () {
    var matureAge = 5;
    var stopHeightAge = 8;
    var stopFruitAge = 30;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produce ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 6));
      }
    }

  }

  // Produce some Pear
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 9));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Pear();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

module.exports = {
  FruitTree: FruitTree,
  Fruit: Fruit,
  MangoTree: MangoTree,
  Mango: Mango,
  AppleTree: AppleTree,
  Apple: Apple,
  PearTree: PearTree,
  Pear: Pear
}
