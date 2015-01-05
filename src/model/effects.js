function Effects (effectsName, times, trigger, tempTime) {
  this.effectsName = effectsName;
  this.times = times || 1;
  this.trigger = trigger;
  this.tempTime = tempTime || 1;
}

module.exports = Effects;
