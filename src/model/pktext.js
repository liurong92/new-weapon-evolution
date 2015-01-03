function PkText() {

}

PkText.getSimpleText = function (attacker, defencer) {
  var text = '';
  this.getNewHp(attacker,defencer);
  text = this.getRoleText(attacker, defencer) + defencer.name + '受到了' +
         attacker.getSoldierAttack() + '点攻击，剩' + defencer.hp + '点血。\n';

  return text;
};

PkText.getRoleText = function (attacker, defencer) {

  return attacker.getRoleName() + attacker.name + attacker.getSoldierWeaponText() +
        '攻击了' + defencer.getRoleName() + defencer.name + ',';
};

PkText.getNewHp = function (attacker, defencer) {
  return defencer.hp -= attacker.getSoldierAttack();
};

module.exports = PkText;
