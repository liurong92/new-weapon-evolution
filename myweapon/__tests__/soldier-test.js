jest.dontMock('../src/role');
jest.dontMock('../src/soldier');
jest.dontMock('../src/player');
jest.dontMock('../src/weapon');
jest.dontMock('../src/defense');
jest.dontMock('../src/effects');

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
      var lisi = new Soldier(roleTwo, '李四', 20);

      var resultOne = zhangsan.getAttackText(lisi);
      var resultTwo = lisi.getAttackText(zhangsan);

      expect(resultOne).toEqual('战士张三攻击了战士李四,李四受到了7攻击,剩13点血.\n');
      expect(resultTwo).toEqual('战士李四攻击了战士张三,张三受到了5攻击,剩15点血.\n');
    });

    it('should return the one_soldier_have_weapon', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('普通人', 5);

      var Weapon = require('../src/weapon');
      var weapon = new Weapon('青龙刀', 2);

      var Soldier = require('../src/soldier');
      var zhangsan = new Soldier(roleOne, '张三', 20, weapon);

      var Player = require('../src/player');
      var lisi = new Player(roleTwo, '李四', 20);

      var resultOne = zhangsan.getAttackText(lisi);
      var resultTwo = lisi.getAttackText(zhangsan);

      expect(resultOne).toEqual('战士张三用青龙刀攻击了普通人李四,李四受到了9攻击,剩11点血.\n');
      expect(resultTwo).toEqual('普通人李四攻击了战士张三,张三受到了5攻击,剩15点血.\n');
    });

    it('should return the one_soldier_have_defense', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('普通人', 5);

      var Weapon = require('../src/weapon');
      var weapon = new Weapon('青龙刀', 2);

      var Defense = require('../src/defense');
      var defense = new Defense('藤甲', 1);

      var Soldier = require('../src/soldier');

      var zhangsan = new Soldier(roleOne, '张三', 20, weapon, defense);

      var Player = require('../src/player');
      var lisi = new Player(roleTwo, '李四', 20);

      var result = lisi.getAttackText(zhangsan);

      expect(result).toEqual('普通人李四攻击了战士张三,张三受到了4攻击,剩16点血.\n');
    });

    it('should return the one_player_is_no_poisoning', function () {
      var Role = require('../src/role');
      var roleOne = new Role('战士', 7);
      var roleTwo = new Role('普通人', 5);

      var Effects = require('../src/effects');
      var effect = new Effects('中毒', 1, 2, 1, false);

      var Weapon = require('../src/weapon');
      var weapon = new Weapon('毒剑', 5, [effect]);

      var Defense = require('../src/defense');
      var defense = new Defense('藤甲', 1);

      var Soldier = require('../src/soldier');

      var zhangsan = new Soldier(roleOne, '张三', 20, weapon, defense);

      var Player = require('../src/player');
      var lisi = new Player(roleTwo, '李四', 20);

      var resultOne = zhangsan.getAttackText(lisi);
      var resultTwo = lisi.getAttackText(zhangsan);

      expect(resultOne).toEqual('战士张三用毒剑攻击了普通人李四,李四中毒了,李四受到了12攻击,剩8点血.\n');
      expect(resultTwo).toEqual('普通人李四攻击了战士张三,张三受到了4攻击,剩16点血.\n');
    });
  });
});
