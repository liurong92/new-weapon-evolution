var Player = require('./player');

function Soldier (name, hp, role, weapon, defense) {
  Player.call(this, name, hp, role);
  this.weapon = weapon || '';
  this.defense = defense || '';
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getSoldierAttack = function () {
  return this.weapon ? (this.weapon.weaponAttack + this.getRoleAttack()) : this.getRoleAttack();
};

Soldier.prototype.getDefense = function () {
  return this.defense ? this.defense.defenseAttack : 0;
};

Soldier.prototype.getSoldierWeaponText = function () {
  return this.weapon ? this.weapon.getWeaponText() : '';
};

Soldier.prototype.getSoldierWeaponEffectTime = function () {
  return this.weapon ? this.weapon.getEffectTimes() : 1;
};

Soldier.prototype.getSoldierWeaponEfName = function () {
  return this.weapon ? this.weapon.getEfName() : '';
};

Soldier.prototype.getSoldierWeaponEffectName = function (defencerName) {
  if (this.weapon) {
    return this.weapon.getEffectName(this.name, defencerName);
  } else {
    return '';
  }
};

Soldier.prototype.getSoldierEffectsTrigger = function () {
  return this.weapon ? this.weapon.getEffectTrigger() : null;
};

module.exports = Soldier;
