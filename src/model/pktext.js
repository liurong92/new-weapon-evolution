function PkText() {

}

PkText.getRandom = function () {
  return Math.random();
};

PkText.getSimpleText = function (attacker, defencer) {
  var text = '';
  var random = this.getRandom();
  this.getNewHp(attacker, defencer, random);
  text = this.getRoleText(attacker, defencer) + this.getEffectsText(attacker, random) +
        defencer.name + '受到了' + this.getAttack(attacker, defencer, random)+ '点攻击，剩' +
        defencer.hp + '点血。\n';

  return text;
};

PkText.getRoleText = function (attacker, defencer) {
  return attacker.getRoleName() + attacker.name + attacker.getSoldierWeaponText() +
        '攻击了' + defencer.getRoleName() + defencer.name + ',';
};

PkText.getAttack = function (attacker, defencer, random) {
  return attacker.getSoldierAttack() * this.getEffectsAttack(attacker, random) -
         defencer.getDefense();
};

PkText.getNewHp = function (attacker, defencer, random) {
  return defencer.hp -= this.getAttack(attacker, defencer, random);
};

PkText.getEffectsText = function (attacker, random) {
  if(attacker.getSoldierEffectsTrigger() > random) {
    return attacker.getSoldierWeaponEffectName();
  } else {
    return '';
  }
};

PkText.getEffectsAttack = function (attacker, random) {
  if(attacker.getSoldierEffectsTrigger() > random) {
    return attacker.getSoldierWeaponEffectTime();
  } else {
    return 1;
  }
};


module.exports = PkText;
