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

  });
});
