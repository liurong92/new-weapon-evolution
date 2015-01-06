var Role = require('./role');
var Player = require('./player');
var Pk = require('./pk');
var Soldier = require('./soldier');
var Weapon = require('./weapon');
var Defense = require('./defense');

function main () {
  var roleOne = new Role('战士', 7);
  var roleTwo = new Role('普通人', 5);

  var weapon = new Weapon('青龙刀' , 2);
  var defense = new Defense('藤甲', 1);

  var zhangsan = new Soldier(roleOne, '张三', 50, weapon, defense);
  var lisi = new Player(roleTwo, '李四', 50);

  var pk = new Pk();
  var result = pk.getTexts(lisi, zhangsan);

  console.log(result);
}

main();