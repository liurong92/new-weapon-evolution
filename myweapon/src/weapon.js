var EffectGroup = require('./effect-group');

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
  var attack = 0;
  var times = 1;
  var isUse = false;
  var effects = this.effects;

  for(var i = 0; i < effects.length; i++) {
    if(effects[i].changeIsUse()) {
      text = effects[i].name;
      attack = effects[i].effectAttack;
      times = effects[i].times;
      isUse = effects[i].changeIsUse();
    }
  }

  return new EffectGroup(text, attack, times, isUse);
};

module.exports = Weapon;
