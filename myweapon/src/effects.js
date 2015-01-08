function Effects (name, effectAttack, times, trigger, isUse) {
  this.name = name || '';
  this.effectAttack = effectAttack || 0;
  this.times = times || 0;
  this.trigger = trigger || 0;
  this.isUse = isUse || false;
}

Effects.prototype.changeIsUse = function () {
  if(this.trigger > Math.random()) {
    this.isUse = true;
  }

  return this.isUse;
};
module.exports = Effects;
