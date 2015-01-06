var Player = require('./player');

function Soldier(role, name, hp, weapon, defese) {
  Player.call(this, role, name, hp);
  this.weapon = weapon || '';
  this.defese = defese || '';
}

Soldier.prototype = Object.create(Player.prototype);

Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackText = function (defencer) {
  var text = '';
  this.getNewHp(defencer);

  text = this.role.roleName + this.name + '攻击了' + defencer.role.roleName +
        defencer.name + ',' + defencer.name + '受到了' + this.getAp() +
        '攻击,剩' + defencer.hp + '点血.\n';

  return text;
};

Soldier.prototype.getAp = function () {
  return this.weapon ? (this.role.roleAttack + this.weapon.weaponAttack) : this.role.roleAttack;
};

Soldier.prototype.getNewHp = function (defencer) {
  defencer.hp -= this.getAp();
};

module.exports = Soldier;
