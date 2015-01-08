var Effects = require('./effects');

function PosionEffects(name, effectAttack, times, trigger, isUse) {
  Effects.call(this, name, effectAttack, times, trigger, isUse);
}

PosionEffects.prototype = Object.create(Effects.prototype);
PosionEffects.prototype.constructor = PosionEffects;

PosionEffects.getPosionFireAndPosoning = function (attacker, defencer) {
  result = '';
  result += defencer.name + '受到' + attacker.weapon.getAttack() + '点' +
        attacker.weapon.getName() + '伤害,' + defencer.name + '剩余生命:' +
        PosionEffects.getEffectDamage(attacker, defencer) + '\n';
  return result;
};

PosionEffects.getEffectDamage = function(attacker, defencer) {
  return defencer.hp -= attacker.weapon.getAttack();
};

module.exports = PosionEffects;
