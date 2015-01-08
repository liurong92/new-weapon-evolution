var Role = require('./role');
var Player = require('./player');
var Pk = require('./pk');
var Soldier = require('./soldier');
var Weapon = require('./weapon');
var Defense = require('./defense');
var Effects = require('./effects');

function main () {
  var roleOne = new Role('战士', 7);
  var roleTwo = new Role('普通人', 5);

  var defense = new Defense('藤甲', 1);

  var weapon = new Weapon('毒剑', 5, [new Effects('中毒', 1, 2, 0.3, false)]);

  var zhangsan = new Soldier(roleOne, '张三', 90, '', weapon, defense);
  var lisi = new Player(roleTwo, '李四', 100);

  var pk = new Pk();
  var result = pk.getTexts(lisi, zhangsan);
  console.log(result);
}

main();
