var Effects = require('./effects');

function PosionEffects(name, effectAttack, times, trigger, isUse) {
  Effects.call(this, name, effectAttack, times, trigger, isUse);
  this.round = 0;
}

PosionEffects.prototype = Object.create(Effects.prototype);
PosionEffects.prototype.constructor = PosionEffects;

PosionEffects.getPosionFireAndPosoning = function (attacker, defencer) {
  result = '';
  if (attacker.weapon.getTimes()) {
    result += PosionEffects.getFireAndPosoningText(attacker, defencer);
    this.round++;
  }


  return result;
};

PosionEffects.getFireAndPosoningText = function (attacker, defencer) {
  return defencer.name + '受到' + attacker.weapon.getAttack() + '点' +
        attacker.weapon.getName() + '伤害,' + defencer.name + '剩余生命:' +
        PosionEffects.getEffectDamage(attacker, defencer) + '\n';
};

PosionEffects.getEffectDamage = function(attacker, defencer) {
  return defencer.hp -= attacker.weapon.getAttack();
};

module.exports = PosionEffects;
