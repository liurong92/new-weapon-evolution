var Player = require('./player');

function Soldier(role, name, hp, weapon, defense) {
  Player.call(this, role, name, hp);
  this.weapon = weapon || '';
  this.defense = defense || '';
}

Soldier.prototype = Object.create(Player.prototype);

Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackText = function (defencer) {
  var text = '';
  this.getNewHp(defencer);

  text = this.role.roleName + this.name + this.getWeaponName() + '攻击了' + defencer.role.roleName +
        defencer.name + ',' + this.getEfText(defencer) + defencer.name + '受到了' + this.getAp(defencer) +
        '攻击,剩' + defencer.hp + '点血.\n';

  return text;
};

Soldier.prototype.getAp = function (defencer) {
  return this.weapon ? (this.role.roleAttack + this.weapon.weaponAttack - defencer.getDefenseAttack()) :
        (this.role.roleAttack - defencer.getDefenseAttack());
};

Soldier.prototype.getNewHp = function (defencer) {
  defencer.hp -= this.getAp(defencer);
};

Soldier.prototype.getWeaponName = function () {
  return this.weapon ? this.weapon.getWeaponText() : '';
};

Soldier.prototype.getDefenseAttack = function () {
  return this.defense ? this.defense.getDefenseAttack() : 0;
};

Soldier.prototype.getEfText = function (defencer) {
  return this.weapon ? this.weapon.getEffectsText(defencer) : '';
};

module.exports = Soldier;
