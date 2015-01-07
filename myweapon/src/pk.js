var State = require('./state');

function Pk () {

}

Pk.prototype.getTexts = function (attacker, defencer) {
  var result = '';

  while(1) {
    result += attacker.getAttackText(defencer);
    if(defencer.hp <= 0 ) {
      result += defencer.name + '输。';
      break;
    }

    result += defencer.getAttackText(attacker);
    if(attacker.hp <= 0) {
      result += attacker.name + '输。';
      break;
    }

  }
  return result;
};


module.exports = Pk;
