jest.autoMockOff();

describe('Pk', function () {
  describe('#getText', function () {
    it('should return who win', function () {
      Soldier = require('../src/model/soldier');
      Role = require('../src/model/role');

      role1 = new Role('战士', 10);
      role2 = new Role('平民', 5);

      var soldier = new Soldier('李四', 20, role1);
      var player = new Soldier('张三', 20, role2);

      var Pk = require('../src/model/pk');
      var pk = new Pk();
      var result = pk.getText(soldier, player);

      var text = '战士李四攻击了平民张三,张三受到了10点攻击，剩10点血。\n' +
                 '平民张三攻击了战士李四,李四受到了5点攻击，剩15点血。\n' +
                 '战士李四攻击了平民张三,张三受到了10点攻击，剩0点血。\n' +
                 '张三输。';

      expect(result).toEqual(text);
    });
  });
});
