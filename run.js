var parent = require('./fruit-tree-release2.js');

var ParentTree = new parent[0];
var ParentFruit = new parent[1];

var pear = require('./pear-tree-release2.js');
var mango = require('./mango-tree-release2.js');
var apple = require('./apple-tree-release2.js');

var ChildsTree = [pear[0], mango[0], apple[0]];
var ChildsFruit = [pear[1], mango[1], apple[1]];


for (var i = 0; i <= ChildsTree.length - 1; i++) {
  if (i === 0) {
    console.log('-----------------------------PEAR GARDEN--------------------------------')
  }
  else if (i === 1) {
    console.log('-----------------------------MANGO GARDEN-------------------------------')
  }
  else {
    console.log('-----------------------------APPLE GARDEN-----------------------------')
  }
  let fruitTree = new ChildsTree[i]
  do {
    fruitTree.grow();
    let buahEach = ChildsFruit[i]
    fruitTree.produceFruit(buahEach);
    fruitTree.harvest();
    console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvested}`)
  }
  while (fruitTree.healthStatus != false)
  console.log('----------------------------------------------------------------------');

}
  