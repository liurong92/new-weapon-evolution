jest.dontMock('../src/weapon');
jest.dontMock('../src/effects');
jest.dontMock('../src/player');

describe('Weapon', function() {
  describe('#getEffect', function () {
    it('should return effect', function() {
      var Effects = require('../src/effects');
      var Weapon = require('../src/weapon');

      var effect = new Effects('中毒了', 1, 2, 0.2, false);
      var weapon = new Weapon('毒剑', 5, [effect]);
      var text = weapon.getEffect();
      expect(text).toEqual([effect]);
    });

    it('should return who 中毒了', function() {
      var Effects = require('../src/effects');
      var Weapon = require('../src/weapon');
      var Player = require('../src/player');

      var player = {name: '张三', hp : 50};
      var effect = new Effects('中毒', 1, 2, 1, false);
      var weapon = new Weapon('毒剑', 5, [effect]);

      var text = weapon.getEffectsText(player);
      expect(text).toEqual('张三中毒了,');
    });

  });
});
