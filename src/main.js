var Player = require('./model/player');
var Pk = require('./model/pk');
var Role = require('./model/role');
var Soldier = require('./model/soldier');
var Weapon =require('./model/weapon');
var Defense = require('./model/defense');
var Effects = require('./model/effects');
function weaponEvolution(){
    var role1 = new Role('战士', 10);
    var role2 = new Role('平民', 5);

    var effects = new Effects('致命一击', 3, 0.4);

    var weapon = new Weapon('青龙刀', 5, effects);

    var defense = new Defense('藤甲', 1);

    var soldier = new Soldier('张三', 20, role1, weapon, defense);
    var player = new Soldier('李四', 20, role2);

    var pk = new Pk();
    var result = pk.getText(soldier, player);

    console.log(result);
}
weaponEvolution();
