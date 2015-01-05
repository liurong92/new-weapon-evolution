function OrdinaryPlayer (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

OrdinaryPlayer.prototype.getAttackInformation = function (player) {
  var defensive = 0;
  if (player.armor !== '') {
    defensive = player.armor.defensive;
  }
  
  if (defensive > this.attack) {
    defensive = this.attack;
  }
  player.hp -= (this.attack - defensive);

  return '普通人' + this.name + '攻击了战士' + player.name + ',' +
         player.name + '受到了' + (this.attack - player.armor.defensive) +
         '点伤害,' + player.name + '剩余生命:' + player.hp + '\n';
};

module.exports = OrdinaryPlayer;
