jest.autoMockOff();

describe('Pk', function () {
  describe('#getText', function () {
    // it('should return who win', function () {
    //   Soldier = require('../src/model/soldier');
    //   Role = require('../src/model/role');
    //
    //   role1 = new Role('战士', 10);
    //   role2 = new Role('平民', 5);
    //
    //   var soldier = new Soldier('李四', 20, role1);
    //   var player = new Soldier('张三', 20, role2);
    //
    //   var Pk = require('../src/model/pk');
    //   var pk = new Pk();
    //   var result = pk.getText(soldier, player);
    //
    //   var text = '战士李四攻击了平民张三,张三受到了10点攻击，剩10点血。\n' +
    //              '平民张三攻击了战士李四,李四受到了5点攻击，剩15点血。\n' +
    //              '战士李四攻击了平民张三,张三受到了10点攻击，剩0点血。\n' +
    //              '张三输。';
    //
    //   expect(result).toEqual(text);
    // });

    it('should return who win', function(){
      console.log = jest.genMockFn();
      var OrdinaryPlayer = require('../src/ordinary-player');
      var SoldierPlayer = require('../src/soldier-player');
      var StartPk = require('../src/start-pk');
      var Armor = require('../src/armor');
      var Weapon = require('../src/weapon');

      var ordinaryPlayer = new OrdinaryPlayer('张三', 50, 10);
      var armor = new Armor('麒麟甲', 5);
      var weapon = new Weapon('屠龙刀', 7);
      var soldierPlayer = new SoldierPlayer('李斯',50, 10, armor, weapon);

      var result = StartPk.start(ordinaryPlayer, soldierPlayer);

      var expertString = '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命:33\n' +
                        '普通人张三攻击了战士李斯,李斯受到了5点伤害,李斯剩余生命:45\n' +
                        '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命:16\n' +
                        '普通人张三攻击了战士李斯,李斯受到了5点伤害,李斯剩余生命:40\n' +
                        '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命:-1\n' +
                        '张三输了';

      expect(result).toBe(expertString);
    });
  });
});
