var State = require('./state');

function Pk () {

}

Pk.prototype.getTexts = function (attacker, defencer) {
  var result = '';

  while(1) {
    result += attacker.attackText(defencer);
    if(defencer.hp <= 0 ) {
      result += defencer.name + '输。';
      break;
    }

    result += defencer.attackText(attacker);
    if(attacker.hp <= 0) {
      result += attacker.name + '输。';
      break;
    }

  }
  return result;
};


module.exports = Pk;
