var Effects = require('./effects');

function PosionEffects() {

}

PosionEffects.getPosionFireAndPosoning = function (attacker, defencer) {
  var result = '';
  result += PosionEffects.getFireAndPosoningText(attacker, defencer);
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
