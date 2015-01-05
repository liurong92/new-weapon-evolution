var OrdinaryPlayer = require('./ordinary-player');
var SoldierPlayer = require('./soldier-player');
var Armor = require('./armor');
var StartPk = require('./start-pk');
var Weapon = require('./weapon');
var Effects = require('./effects');
function mainPk() {
  var ordinaryPlayer = new OrdinaryPlayer('张三', 50, 10);

  var armor = new Armor('麒麟甲', 5);

  var effects = new Effects('致命一击', 0.4, 1, 3);

  var weapon = new Weapon('屠龙刀', 7, effects);

  var soldierPlayer = new SoldierPlayer('李斯',50, 10, armor, weapon);

  var result = StartPk.start(soldierPlayer, ordinaryPlayer);
  console.log(result);
}

mainPk();
