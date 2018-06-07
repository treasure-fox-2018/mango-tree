var parent = require('./fruit-tree-release2.js');

var ParentTree = new parent[0];
var ParentFruit = new parent[1];

var pear = require('./pear-tree-release2.js');
var mango = require('./mango-tree-release2.js');
var apple = require('./apple-tree-release2.js');
// console.log(ParentTree);
// console.log(ParentFruit)

var ChildsTree = [];
var ChildsFruit = [];


for (var j = 0; j < 2; j++) {
  if (j === 0) {
    ChildsTree.push(pear[j]);
    ChildsTree.push(mango[j]);
    ChildsTree.push(apple[j]);
  }
  else {
    ChildsFruit.push(pear[j]);
    ChildsFruit.push(mango[j]);
    ChildsFruit.push(apple[j]);
  }
}

// console.log(ChildsTree);
// console.log(ChildsFruit);

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
  ChildsFruit[i];
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
  