function Weapon (weaponName, weaponAttack) {
  this.weaponName = weaponName;
  this.weaponAttack = weaponAttack;
}

Weapon.prototype.getWeaponText = function () {
  return '用' + this.weaponName;
};

module.exports = Weapon;
