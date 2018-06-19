"use strict"

class Fruit {

  constructor () {
    var arrStr = ["good", "bad"];
    this._quality = arrStr[Math.trunc(Math.random() * arrStr.length)];
  }

  get quality () {
    return this._quality;
  }

}

module.exports = Fruit;
