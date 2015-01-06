var Role = require('./role');

function Player (role, name, hp) {
  this.role = role;
  this.name = name;
  this.hp = hp;
}

Player.prototype.getAttackText = function (defencer) {
  var text = '';
  this.getNewHp(defencer);

  text = this.role.roleName + this.name + '攻击了' + defencer.role.roleName +
        defencer.name + ',' + defencer.name + '受到了' + this.getAp(defencer) +
        '攻击,剩' + defencer.hp + '点血.\n';

  return text;
};

Player.prototype.getAp = function (defencer) {
  return this.role.roleAttack - defencer.getDefenseAttack();
};

Player.prototype.getNewHp = function (defencer) {
  defencer.hp -= this.getAp(defencer);
};

Player.prototype.getDefenseAttack = function () {
  return 0;
};

module.exports = Player;
