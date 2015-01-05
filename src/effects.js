function Effects(effectName, trigger, times, attackTimes) {
  this.effectName = effectName;
  this.trigger = trigger || 0;
  this.times = times;
  this.attackTimes = attackTimes;
}

module.exports = Effects;
