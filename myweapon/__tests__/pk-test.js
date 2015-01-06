jest.dontMock('../src/role');
jest.dontMock('../src/player');
jest.dontMock('../src/pk');

describe('Pk', function() {
  describe('#getTexts', function () {
    it('should return who win', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('普通人', 5);

      var Player = require('../src/player');
      var zhangsan = new Player(roleOne, '张三', 20);
      var lisi = new Player(roleTwo, '李四', 20);

      var Pk = require('../src/pk');
      var pk = new Pk();
      var text = '战士张三攻击了普通人李四,李四受到了7攻击,剩13点血.\n' +
              '普通人李四攻击了战士张三,张三受到了5攻击,剩15点血.\n' +
              '战士张三攻击了普通人李四,李四受到了7攻击,剩6点血.\n' +
              '普通人李四攻击了战士张三,张三受到了5攻击,剩10点血.\n' +
              '战士张三攻击了普通人李四,李四受到了7攻击,剩-1点血.\n' +
              '李四输。';

      var result = pk.getTexts(zhangsan, lisi);

      expect(result).toEqual(text);
    });
  });
});
