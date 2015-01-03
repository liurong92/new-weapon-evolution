function Weapon (weaponName, weaponAttack) {
  this.weaponName = weaponName || '';
  this.weaponAttack = weaponAttack || 0;
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

module.exports = Weapon;
