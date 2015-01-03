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
});
