function Defense(defenseName, defenseAttack) {
  this.defenseName = defenseName;
  this.defenseAttack = defenseAttack;
}

Defense.prototype.getDefenseAttack = function () {
  return this.defenseAttack;
};

module.exports = Defense;
