class Mango {
  // Produce a mango
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

module.exports.Mango = Mango
