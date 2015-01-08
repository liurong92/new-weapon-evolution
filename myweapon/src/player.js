var Role = require('./role');
var State = require('./state');
function Player (role, name, hp, state) {
  this.role = role || '';
  this.name = name || '';
  this.hp = hp || 0;
  this.state = state ||'正常';
  this.times = 0;
}

Player.prototype.attackText = function (soldier) {
  var text = '';
  this.getNewHp(soldier);
  if(this.state !== '正常' && this.times < soldier.weapon.getTimes()) {
    text += State.getStateText(soldier, this);
    this.times++;
  } else {
    this.times = 0;
  }
  if (this.hp > 0) {
    text += this.getAttackText(soldier);
  }


  return text;
};

Player.prototype.getAttackText = function (soldier) {
  return this.role.roleName + this.name + '攻击了' + soldier.role.roleName +
        soldier.name + ',' + soldier.name + '受到了' + this.getAp(soldier) +
        '攻击,剩' + soldier.hp + '点血.\n';
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
