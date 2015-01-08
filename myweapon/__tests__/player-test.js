jest.dontMock('../src/role');
jest.dontMock('../src/player');

describe('Player', function() {
  describe('#getAttack', function () {
    it('should return the attack', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 5);
      var roleTwo = new Role('普通人', 5);

      var Player = require('../src/player');
      var zhangsan = new Player(roleOne, '张三', 20, '');
      var lisi = new Player(roleTwo, '李四', 20, '');
      var resultOne = lisi.attackText(zhangsan);
      var resultTwo = zhangsan.attackText(lisi);

      expect(resultOne).toBe('普通人李四攻击了战士张三,张三受到了5攻击,剩15点血.\n');
      expect(resultTwo).toBe('战士张三攻击了普通人李四,李四受到了5攻击,剩15点血.\n');
    });
  });
});
