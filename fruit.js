const {MangoTree, Mango} = require("./fruit_mango.js");
const {AppleTree, Apple} = require("./fruit_apple.js");
const {PeerTree, Peer} = require("./fruit_peer.js");


console.log('MangoTree >----------------------------> MangoTree')
console.log('The tree is alive! :smile:');
let mangoTree = new MangoTree(2, 7, 10)

do{
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.totalFruits} (${mangoTree.good} good, ${mangoTree.bad} bad)`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end. :sad:');

console.log('AppleTree >--------------AppleTree--------------> AppleTree')
console.log('The tree is alive! :smile:');
let appleTree = new AppleTree(2, 7, 10)
do{
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.totalFruits} (${appleTree.good} good, ${appleTree.bad} bad)`)
} while (appleTree.healthStatus != false)
console.log('The tree has met its end. :sad:');


console.log('PeerTree >--------------PeerTree--------------> PeerTree')
console.log('The tree is alive! :smile:');
let peerTree = new PeerTree(3, 6, 12)
do{
  peerTree.grow();
  peerTree.produceFruits();
  peerTree.harvest()
  console.log(`[Year ${peerTree.age} Report] Height = ${peerTree.height} m | Fruits harvested = ${peerTree.totalFruits} (${peerTree.good} good, ${peerTree.bad} bad)`)
} while (peerTree.healthStatus != false)
console.log('The tree has met its end. :sad:');
