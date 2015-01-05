var Player = require('./player');
var Pk = require('./pk');
var Role = require('./role');
var Soldier = require('./soldier');
var Weapon =require('./weapon');
var Defense = require('./defense');
var Effects = require('./effects');
function weaponEvolution(){
    var role1 = new Role('战士', 3);
    var role2 = new Role('平民', 5);

    var effects = new Effects('中毒了', 3, 0.4);

    var weapon = new Weapon('青龙刀', 5, effects);

    var defense = new Defense('藤甲', 1);

    var soldier = new Soldier('张三', 50, role1, weapon, defense);
    var player = new Soldier('李四', 50, role2);

    var pk = new Pk();
    var result = pk.getText(soldier, player);

    console.log(result);
}
weaponEvolution();
