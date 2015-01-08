var Role = require('./role');
var _ = require('lodash');
var State = require('./state');
function Player (role, name, hp, state) {
  this.role = role || '';
  this.name = name || '';
  this.hp = hp || 0;
  this.state = _.isUndefined(state) ? '正常' : state;
}

Player.prototype.getAttackText = function (soldier) {
  var text = '';
  this.getNewHp(soldier);
  text += State.getStateText(soldier, this);
  text += this.role.roleName + this.name + '攻击了' + soldier.role.roleName +
        soldier.name + ',' + soldier.name + '受到了' + this.getAp(soldier) +
        '攻击,剩' + soldier.hp + '点血.\n';

  return text;
};

Player.prototype.getAp = function (soldier) {
  return this.role.roleAttack - soldier.getDefenseAttack();
};

Player.prototype.getNewHp = function (soldier) {
  soldier.hp -= this.getAp(soldier);
};

Player.prototype.getDefenseAttack = function () {
  return 0;
};

module.exports = Player;
