var Player = require('./player');

function Soldier (name, hp, role, weapon, defense) {
  Player.call(this, name, hp, role);
  this.weapon = weapon || '';
  this.defense = defense || '';
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getSoldierAttack = function () {
  if(this.weapon) {
    return this.weapon.weaponAttack + this.getRoleAttack();
  } else {
    return this.getRoleAttack();
  }
};

Soldier.prototype.getDefense = function () {
  // console.log(player.defense.defenseAttack);
  if(this.defense) {
    return this.defense.defenseAttack;
  } else {
    return 0;
  }
};

Soldier.prototype.getSoldierWeaponText = function () {
  if (this.weapon) {
    return this.weapon.getWeaponText();
  } else {
    return '';
  }
};

module.exports = Soldier;
