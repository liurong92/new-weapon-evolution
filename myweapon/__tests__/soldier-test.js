jest.dontMock('../src/role');
jest.dontMock('../src/soldier');
jest.dontMock('../src/player');

describe('Soldier', function () {
  describe('#getAttackText', function () {
    it('should return the attack', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('普通人', 5);

      var Soldier = require('../src/soldier');
      var zhangsan = new Soldier(roleOne, '张三', 20);

      var Player = require('../src/player');
      var lisi = new Player(roleTwo, '李四', 20);

      var resultOne = zhangsan.getAttackText(lisi);
      var resultTwo = lisi.getAttackText(zhangsan);

      expect(resultOne).toEqual('战士张三攻击了普通人李四,李四受到了7攻击,剩13点血.\n');
      expect(resultTwo).toEqual('普通人李四攻击了战士张三,张三受到了5攻击,剩15点血.\n');
    });

    it('should return the two_soldier_text', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('战士', 5);

      var Soldier = require('../src/soldier');
      var zhangsan = new Soldier(roleOne, '张三', 20);

      var Player = require('../src/player');
      var lisi = new Player(roleTwo, '李四', 20);

      var resultOne = zhangsan.getAttackText(lisi);
      var resultTwo = lisi.getAttackText(zhangsan);

      expect(resultOne).toEqual('战士张三攻击了战士李四,李四受到了7攻击,剩13点血.\n');
      expect(resultTwo).toEqual('战士李四攻击了战士张三,张三受到了5攻击,剩15点血.\n');
    });
  });
});
