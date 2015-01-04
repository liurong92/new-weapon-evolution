function Weapon (weaponName, weaponAttack, effects) {
  this.weaponName = weaponName || '';
  this.weaponAttack = weaponAttack || 0;
  this.effects = effects || '';
}

Weapon.prototype.getWeaponName = function () {
  return this.weaponName;
};

Weapon.prototype.getWeaponAttack = function () {
  return this.weaponAttack;
};

Weapon.prototype.getWeaponText = function () {
  if (this.weaponName) {
    return '用' + this.weaponName;
  } else {
    return '';
  }
};

Weapon.prototype.getEffectTrigger = function () {
  if (this.effects) {
    return this.effects.trigger;
  } else {
    return null;
  }

};

Weapon.prototype.getEffectTimes = function () {
  if (this.effects) {
    return this.effects.times;
  } else {
    return 1;
  }
};

Weapon.prototype.getEffectName = function (name) {
  if (this.effects) {
    return name + '发动了' + this.effects.effectsName + ',';
  } else {
    return '';
  }
};

module.exports = Weapon;
