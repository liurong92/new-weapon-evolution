function Effect (name, effectAttack, times, trigger, isUse) {
  this.name = name;
  this.effectAttack = effectAttack;
  this.times = times;
  this.trigger = trigger;
  this.isUse = isUse;
}


module.exports = Effect;
