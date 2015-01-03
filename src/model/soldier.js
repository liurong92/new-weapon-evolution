var Player = require('./player');

function Soldier (name, hp, role, weapon, defense) {
  Player.call(this, name, hp, role);
  this.weapon = weapon || '';
  this.defense = defense || '';
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getSoldierWeaponName = function (){
  return this.weapon.weaponName;
};

Soldier.prototype.getSoldierWeaponAttack = function () {
  return this.weapon.weaponAttack;
};

Soldier.prototype.getSoldierWeaponText = function () {
  if (this.weapon) {
    return this.weapon.getWeaponText();
  } else {
    return '';
  }
};

module.exports = Soldier;
