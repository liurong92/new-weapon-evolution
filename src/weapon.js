var _ = require('lodash');

function Weapon (name, attack, effects) {
  this.name = name;
  this.attack = attack;
  this.effects = effects || '';
}

Weapon.prototype.getAp = function () {
  return this.attack;
};

Weapon.prototype.getEffectName = function () {
  return this.effects ? this.effects.effectName : '';
};

Weapon.prototype.getEffectTrigger = function () {
  return this.effects ? this.effects.trigger : 0;
};

module.exports = Weapon;
