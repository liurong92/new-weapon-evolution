var PosionEffects = require('./posion-effects');

function State () {

}

State.getStateText = function (attacker, defencer) {
  var result = '';
  if (defencer.state === '中毒') {
    result += PosionEffects.getPosionFireAndPosoning(attacker, defencer);
  }
  return result;
};

module.exports = State;
