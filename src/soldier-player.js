var OrdinaryPlayer = require('./ordinary-player');

function SoldierPlayer (name, hp, attack, armor, weapon) {
  OrdinaryPlayer.call(this,name, hp, attack);
  this.armor = armor || '';
  this.weapon = weapon || '';
}

SoldierPlayer.prototype = Object.create(OrdinaryPlayer.prototype);
SoldierPlayer.prototype.constructor = SoldierPlayer;

SoldierPlayer.prototype.getAttackInformation = function (player) {
  var result = '';
  var weaponAttack = 0;
  var effectText = '';
  if (this.weapon !== '') {
    weaponAttack = this.weapon.attack;
    if (this.weapon.getEffectTrigger() > Math.random()) {
      effectText = this.getEffectText(player);
    }
  }

  player.hp -= this.calculation(weaponAttack, this.attack);
  result = '战士' + this.name + '用' + this.weapon.name + '攻击了普通人' +player.name +
          effectText + ',' + player.name + '受到了' + this.calculation(weaponAttack, this.attack) +
          '点伤害,' + player.name + '剩余生命:' + player.hp + '\n';
  return result;
};

SoldierPlayer.prototype.calculation = function (weaponAttack, roleAttack) {
  return weaponAttack + roleAttack;
};

SoldierPlayer.prototype.getEffectText = function (player) {
  if (this.weapon.getEffectName() === '致命一击') {
    return ',' + this.name + '发动了' +this.weapon.getEffectName();
  } else {
    return '';
  }
};

module.exports = SoldierPlayer;
