jest.autoMockOff();

describe('SoldierPlayer', function() {
  describe('#getAttackInformation', function () {
    it('should return deadly strike', function () {
      var OrdinaryPlayer = require('../src/ordinary-player');
      var SoldierPlayer = require('../src/soldier-player');
      var StartPk = require('../src/start-pk');
      var Armor = require('../src/armor');
      var Weapon = require('../src/weapon');
      var Effects = require('../src/effects');

      var ordinaryPlayer = new OrdinaryPlayer('张三', 50, 10);
      var armor = new Armor('麒麟甲', 5);

      var effects = new Effects('致命一击', 1, 1, 3);
      var weapon = new Weapon('屠龙刀', 7, effects);
      var soldierPlayer = new SoldierPlayer('李四',50, 10, armor, weapon);

      var result = soldierPlayer.getAttackInformation(ordinaryPlayer);

      expect(result).toBe('战士李四用屠龙刀攻击了普通人张三,李四发动了致命一击,张三受到了17点伤害,张三剩余生命:33\n');
    });
  });

});
