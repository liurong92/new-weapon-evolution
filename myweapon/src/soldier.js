var Player = require('./player');

function Soldier(role, name, hp, state, weapon, defense) {
  Player.call(this, role, name, hp, state);
  this.weapon = weapon || '';
  this.defense = defense || '';
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAttackText = function (player) {
  var text = '';
  this.getNewHp(player);
  text += this.getSimple(player);
  return text;
};

Soldier.prototype.getSimple = function (player) {
  var text = '';
  text += this.role.roleName + this.name + this.getWeaponName() + '攻击了' +
        player.role.roleName + player.name + ',' + player.name + '受到了' +
        this.getAp(player) + '攻击,剩' + player.hp + '点血.\n';

  return text;
};

Soldier.prototype.getAp = function (player) {
  if(this.weapon) {
    return this.role.roleAttack + this.weapon.weaponAttack -
          player.getDefenseAttack();
  } else {
    return this.role.roleAttack - player.getDefenseAttack();
  }
};

Soldier.prototype.getNewHp = function (player) {
  player.hp -= this.getAp(player);
};

Soldier.prototype.getWeaponName = function () {
  if (this.weapon) {
    return this.weapon.getWeaponText  ();
  } else {
    return '';
  }
};

Soldier.prototype.getDefenseAttack = function () {
  if (this.defense) {
    return this.defense.getDefenseAttack();
  } else {
    return 0;
  }
};

Soldier.prototype.getEfText = function (player) {
  if (this.weapon) {
   return this.weapon.getEffectsText(player);
  } else {
    return '';
  }
};

module.exports = Soldier;
