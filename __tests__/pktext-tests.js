jest.autoMockOff();

describe('pktext', function() {
  var Soldier,Role,role1,role2;
  beforeEach(function () {
    Soldier = require('../src/model/soldier');
    Role = require('../src/model/role');

    role1 = new Role('战士', 10);
    role2 = new Role('平民', 5);
  });

    it('return who dead', function() {
      var soldier = new Soldier('李四', 20, role1);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四攻击了平民张三,张三受到了10点攻击，剩10点血。\n');
    });

    it('should return one person have a weapon', function() {
      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5);

      var soldier = new Soldier('李四', 20, role1, weapon);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用青龙刀攻击了平民张三,张三受到了15点攻击，剩5点血。\n');
    });

    it('should return one person have a defense', function() {
      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲',1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(player, soldier);

      expect(result).toEqual('平民张三攻击了战士李四,李四受到了4点攻击，剩16点血。\n');
    });

    it('should return weapon effect deadly strike', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('致命一击', 3, 1, 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用青龙刀攻击了平民张三,李四发动了致命一击,张三受到了45点攻击，剩-25点血。\n');
    });

    it('should return weapon effect not deadly strike', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('致命一击', 3, 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(player, soldier);

      expect(result).toEqual('平民张三攻击了战士李四,李四受到了4点攻击，剩16点血。\n');
    });

    it('should return weapon effect poisoning', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('中毒了', 3, 1, 5);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用青龙刀攻击了平民张三,张三中毒了,张三受到了15点攻击，剩5点血。\n');
    });

    it('should return weapon effect flame', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('着火了', 3, 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('青龙刀', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用青龙刀攻击了平民张三,张三着火了,张三受到了15点攻击，剩5点血。\n');
    });


    it('should return weapon effect frozen stiff', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('冻僵了', 3, 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('冰封之刃', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用冰封之刃攻击了平民张三,张三冻僵了,张三受到了15点攻击，剩5点血。\n');
    });


    it('should return weapon effect dizziness', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('晕倒了', 3, 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('瞌睡虫', 5, effects);

      var Defense = require('../src/model/defense');
      var defense = new Defense('藤甲', 1);

      var soldier = new Soldier('李四', 20, role1, weapon, defense);
      var player = new Soldier('张三', 20, role2);

      var PkText = require('../src/model/pktext');
      var result = PkText.getSimpleText(soldier, player);

      expect(result).toEqual('战士李四用瞌睡虫攻击了平民张三,张三晕倒了,张三受到了15点攻击，剩5点血。\n');
    });
});
