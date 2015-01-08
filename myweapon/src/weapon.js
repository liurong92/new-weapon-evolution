function Weapon (weaponName, weaponAttack, effects) {
  this.weaponName = weaponName || '';
  this.weaponAttack = weaponAttack || 0;
  this.effects = effects || [];
}

Weapon.prototype.getWeaponText = function() {
  return '用' + this.weaponName;
};

Weapon.prototype.getEffect = function() {
  return this.effects;
};

Weapon.prototype.getIsUse = function() {
  var isUse = false;
  var effects = this.effects;

  for(var i = 0; i < effects.length; i++) {
    if(effects[i].changeIsUse()) {
      isUse = effects[i].changeIsUse();
    }
  }
  return isUse;
};

Weapon.prototype.getName = function () {
  var name = '';
  var effects = this.effects;
  for(var i = 0; i < effects.length; i++) {
    if(this.getIsUse) {
      name = effects[i].name;
    }
  }
  return name;
};

Weapon.prototype.getAttack = function () {
  var attack = 0;
  var effects = this.effects;
  for(var i = 0; i < effects.length; i++) {
    if(this.getIsUse) {
      attack = effects[i].effectAttack;
    }
  }
  return attack;
};

Weapon.prototype.getTimes = function () {
  var times = 0;
  var effects = this.effects;
  for(var i = 0; i < effects.length; i++) {
    if(this.getIsUse) {
      times = effects[i].times;
    }
  }
  return times;
};

module.exports = Weapon;
