function Weapon (weaponName, weaponAttack, effect) {
  this.weaponName = weaponName || '';
  this.weaponAttack = weaponAttack || 0;
  this.effect = effect || [];
}

Weapon.prototype.getWeaponText = function () {
  return '用' + this.weaponName;
};

Weapon.prototype.getEffect = function () {
  return this.effect;
};

module.exports = Weapon;
