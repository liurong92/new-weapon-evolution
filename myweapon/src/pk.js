function Pk () {

}

Pk.prototype.getTexts = function (attacker, defencer) {
  var text = '';

  while(1) {
    text += attacker.getAttackText(defencer);
    if(defencer.hp <= 0) {
      text += defencer.name + '输。';
      break;
    }

    text += defencer.getAttackText(attacker);
    if(attacker.hp <= 0) {
      text += attacker.name + '输。';
      break;
    }
  }
  return text;
};

module.exports = Pk;
