function State () {

}

State.getStateText = function (attacker, defencer) {
  var result = '';
  if (defencer.state === '中毒') {
    result += 'asdfa';
  }
  return result;
};

module.exports = State;