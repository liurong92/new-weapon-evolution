function Weapon (weaponName, weaponAttack, effects) {
  this.weaponName = weaponName || '';
  this.weaponAttack = weaponAttack || 0;
  this.effects = effects || [];
}

Weapon.prototype.getWeaponName = function () {
  return this.weaponName;
};

Weapon.prototype.getWeaponAttack = function () {
  return this.weaponAttack;
};

Weapon.prototype.getWeaponText = function () {
  return this.weaponName ? '用' + this.weaponName : '';
};

Weapon.prototype.getEffectTrigger = function () {
  return this.effects ? this.effects.trigger : null;
};

Weapon.prototype.getEffectTimes = function () {
  return (this.effects && this.getEfName() === '致命一击') ? this.effects.times : 1;
};

Weapon.prototype.getEfName = function () {
  return this.effects ? this.effects.effectsName : '';
};

Weapon.prototype.getEffectName = function (name, defencerName) {
  if (this.effects && this.getEfName() === '致命一击') {
    return name + '发动了' + this.effects.effectsName + ',';

  } else if (this.effects && this.getEfName() === '中毒了' ||
             this.getEfName() === '着火了' ||
             this.getEfName() === '冻僵了'){
    return defencerName + this.effects.effectsName + ',';

  } else {
    return '';
  }
};

module.exports = Weapon;
