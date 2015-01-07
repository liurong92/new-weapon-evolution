function EffectGroup (text, attack, times, isUse) {
    this.text = text;
    this.attack = attack;
    this.times = times;
    this.isUse = isUse;
}

EffectGroup.prototype.getText = function() {
    return this.text;
};

module.exports = EffectGroup;
