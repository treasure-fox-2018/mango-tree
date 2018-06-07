class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._objFruits = {};
    this._healthStatus = true;
    this._goodCount = 0;
    this._badCount = 0;
    this._stopGrowing = 17;
    this._deadAge = 20;
    this._matureAge = 3;
    this._totalProduce = 0;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._totalFruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return `${this._totalProduce} (${this._goodCount} good, ${this._badCount} bad)`
     
  }

  // Get current states here

  // Grow the tree
  grow () {

    //1,
    this._age++;

    //3.
    if (this._age > this._matureAge) {
      this._totalProduce = Math.floor(Math.random()*20);
    }
    else {
      this._totalProduce = 0;
    }

    //4.
    if (this._age < this._stopGrowing) {
      //2.
      this._height = this._height + (Math.floor(Math.random()*10))/10;
    }

    //5.
    if (this._age >= this._deadAge) {
      this._healthStatus = false;
    }
    return this
  }


  produceFruit (buahEach) {
    var fruitResult = [];
    if (this._totalProduce > 0) {
      for (var i = 0; i <= this._totalProduce - 1; i++) {
        var fruit = new buahEach ();
        fruitResult.push(fruit.quality);
      }
      this._objFruits = {
        fruitsLength : fruitResult.length,
        fruitsArr : fruitResult
        
      }
      // console.log(this._objFruits)
      return this._objFruits
      
    }
    
  }

  // Get some fruits
  harvest () {
    // var fruitArr = this._objFruits.fruitsArr;
    this._goodCount = 0;
    this._badCount = 0;
    for (var i = 0; i <= this._objFruits.fruitsLength - 1; i++) {
      if (this._objFruits.fruitsArr[i] === 'Good') {
        this._goodCount++;
      }
      else {
        this._badCount++;
      }
    }
    
    return this
  }

}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality = this.qualityCreate();
  }

  qualityCreate () {
    var qualityArr = ['Good', 'Bad'];
    return qualityArr[Math.floor(Math.random()* qualityArr.length)]
  }
}

module.exports = [FruitTree, Fruit];