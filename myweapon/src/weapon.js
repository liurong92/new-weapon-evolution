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

Weapon.prototype.getEffectsText = function(player) {
  var text = '';
  var effects = this.effects;

  for(var i = 0; i < effects.length; i++) {
    if(effects[i].changeIsUse()) {
      text += player.name + effects[i].name + '了,';
    }
  }

  return text;

};

module.exports = Weapon;
